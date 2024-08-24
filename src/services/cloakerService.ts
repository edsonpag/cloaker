import { Request } from "express";
import { CloakerConfig } from "../interfaces/CloakerConfig";
import { CloakerResponse } from "../interfaces/CloakerResponse";
import { FirebaseService } from "../apis/firebase_api/firebaseService";
import { VPNResponse } from "../apis/vpn_api/interfaces/VPNResponse";
import { response0 } from "../responses/ritualSecretoRevelado/response0";
import { response1 } from "../responses/ritualSecretoRevelado/response1";
import { response2 } from "../responses/ritualSecretoRevelado/response2";
import { requestApiData } from "../apis/vpn_api/services/vpnService";

export class CloakerService {

    req: Request
    
    cloakerConfig: CloakerConfig

    firebaseService: FirebaseService

    vpnApiData: VPNResponse | null = null

    constructor (req: Request, cloakerConfig: CloakerConfig) {
        this.req = req
        this.cloakerConfig = cloakerConfig
        this.firebaseService = new FirebaseService()
    }

    executeCloakerValidations = async (): Promise<CloakerResponse> => {
        this.checkDesktop()
        this.checkBot()
        this.checkSecretCode()
        this.checkReferrer()
        this.checkSiteSourceName()
        this.vpnApiData = await requestApiData(this.req)
        if (this.vpnApiData === null)
            this.firebaseService.addError(`Erro ao buscar dados na API da VPN`)
        else {
            this.filterBlockedCountries(this.vpnApiData)
            this.checkVpn(this.vpnApiData)
            this.checkProxy(this.vpnApiData)
            this.checkRelay(this.vpnApiData)
            this.checkTor(this.vpnApiData)
        }
        this.saveErrorsInFirebase()
        return this.createCloakerResponse()
    }

    private checkDesktop = () => {
        if (!this.cloakerConfig.checkDesktop)
            return
        const userAgent = this.req.useragent
        const isDesktop = userAgent?.isDesktop
        if (isDesktop) 
            this.firebaseService.addError(`Dispositivo Desktop não permitido | ${userAgent?.platform} | ${userAgent?.os}`)
    }

    private checkBot = () => {
        if (!this.cloakerConfig.checkBot)
            return
        const userAgent = this.req.useragent
        const isBot = userAgent?.isBot
        if (isBot) 
            this.firebaseService.addError(`Bot Detectado | ${userAgent?.platform} | ${userAgent?.os}`)
    }

    private checkSecretCode = () => {
        if (!this.cloakerConfig.checkSecretCode)
            return
        const url = decodeURIComponent(this.req.body.url)
        if (!url)
            return this.firebaseService.addError('URL Inexistente para validação do Secret Code')
        if (!url.includes(this.cloakerConfig.secretCode))
            this.firebaseService.addError(`Secret Code não informado na URL | ${url}`)
    }

    private checkReferrer = () => {
        if (!this.cloakerConfig.checkReferrer)
            return
        let referrer = this.req.body.referrer
        if (referrer) {
            let isAllowedReferrer = false
            referrer = referrer.toLowerCase()
            this.cloakerConfig.allowedReferrers.forEach(ref => {
                if (referrer.includes(ref))
                    isAllowedReferrer = true
            })
            if (!isAllowedReferrer)
                this.firebaseService.addError(`Referrer bloqueada | ${referrer}`)
        }
    }

    private checkSiteSourceName = () => {
        if (!this.cloakerConfig.checkSiteSourceName)
            return
        const url = decodeURIComponent(this.req.body.url)
        if (!url)
            return this.firebaseService.addError('URL Inexistente para Validação do Site Source Name')
        const urlParts = url.split("|")
        if (urlParts.length >= 5) {
            let isAllowedSiteSourceName = false
            const siteSourceName = urlParts[4]
            this.cloakerConfig.allowedSitesSourceNames.forEach(assn => {
                if (siteSourceName.includes(assn))
                    isAllowedSiteSourceName = true
            })
            if (!isAllowedSiteSourceName)
                this.firebaseService.addError(`Site Source Name Inválido | ${siteSourceName}`)
            return
        }
        this.firebaseService.addError("urlParts length menor que 5, não foi passado o site source name")
    }
    
    private filterBlockedCountries = (vpnApiData: VPNResponse) => {
        if(!this.cloakerConfig.filterCountries)
            return
        const countryCode = vpnApiData.location.country_code
        if (!countryCode)
            return this.firebaseService.addError('Country Code Não Encontrado')
        const isBlockedCountry = this.cloakerConfig.blockedCountries.includes(countryCode)
        if (isBlockedCountry)
            this.firebaseService.addError(`Country Blocked | ${countryCode} | ${vpnApiData.ip}`)
    }
    
    private checkVpn = (vpnApiData: VPNResponse) => {
        if (!this.cloakerConfig.checkVpn)
            return
        if (vpnApiData.security.vpn)
            this.firebaseService.addError(`VPN DETECTADA | ${vpnApiData.ip}`)
    }
    
    private checkProxy = (vpnApiData: VPNResponse) => {
        if (!this.cloakerConfig.checkProxy)
            return
        if (vpnApiData.security.proxy)
            this.firebaseService.addError(`PROXY DETECTADA | ${vpnApiData.ip}`)
    }
    
    private checkRelay = (vpnApiData: VPNResponse) => {
        if (!this.cloakerConfig.checkRelay)
            return
        if (vpnApiData.security.relay)
            this.firebaseService.addError(`RELAY DETECTADA | ${vpnApiData.ip}`)
    }
    
    private checkTor = (vpnApiData: VPNResponse) => {
        if (!this.cloakerConfig.checkTor)
            return
        if (vpnApiData.security.tor)
            this.firebaseService.addError(`TOR DETECTADO | ${vpnApiData.ip}`)
    }

    private saveErrorsInFirebase = () => {
        this.firebaseService.persistErrors(this.vpnApiData)
    }
    
    private createCloakerResponse = (): CloakerResponse => {
        const errors = this.firebaseService.getErrors()
        if (errors.length === 0)
            return response0
        else if (this.cloakerConfig.useTwoCloakers && errors.length >= 1 && errors.length <= 2)
            return response1
        else
            return response2
    }
}