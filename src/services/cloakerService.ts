import { Request } from "express";
import { getCloakerConfig } from "../config";
import { requestApiData } from "../apis/vpn_api/services/vpnService";
import { CloakerConfig } from "../interfaces/CloakerConfig";
import { CloakerResponse } from "../interfaces/CloakerResponse";
import { FirebaseService } from "../apis/firebase_api/firebaseService";
import { CloakerRequestBody } from "../interfaces/CloakerRequestBody";
import { VPNResponse } from "../apis/vpn_api/interfaces/VPNResponse";

export class CloakerService {

    req: Request
    
    cloakerConfig: CloakerConfig

    firebaseService: FirebaseService

    vpnApiData: VPNResponse | null = null

    constructor (req: Request) {
        this.req = req
        this.cloakerConfig = getCloakerConfig(req)
        this.firebaseService = new FirebaseService()
    }

    executeCloakerValidations = async (): Promise<CloakerResponse> => {
        this.checkDesktop()
        this.checkBot()
        this.checkSecretCode()
        this.checkReferrer()
        this.checkSiteSourceName()
        this.checkBrowserLanguage()
        await this.getVpnApiData()
        if (this.vpnApiData !== null) {
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
        const cloakerRequestBody: CloakerRequestBody = this.req.body
        const url = cloakerRequestBody.url
        if (!url)
            return this.firebaseService.addError('URL Inexistente para validação do Secret Code')
        if (!url.includes(this.cloakerConfig.secretCode))
            this.firebaseService.addError(`Secret Code não informado na URL | ${url}`)
    }

    private checkReferrer = () => {
        if (!this.cloakerConfig.checkReferrer)
            return
        const cloakerRequestBody: CloakerRequestBody = this.req.body
        let referrer = cloakerRequestBody.referrer
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
        const cloakerRequestBody: CloakerRequestBody = this.req.body
        const url = cloakerRequestBody.url
        if (!url)
            return this.firebaseService.addError('URL Inexistente para Validação do Site Source Name')
        const urlParts = url.split("|")
        if (urlParts.length >= 5) {
            let isAllowedSiteSourceName = false
            const siteSourceName = urlParts[4]
            this.cloakerConfig.allowedSitesSourceNames.forEach(assn => {
                if (assn.includes(siteSourceName))
                    isAllowedSiteSourceName = true
            })
            if (!isAllowedSiteSourceName)
                this.firebaseService.addError(`Site Source Name Inválido | ${siteSourceName}`)
            return
        }
        this.firebaseService.addError("urlParts length menor que 5, não foi passado o site source name")
    }

    private checkBrowserLanguage = () => {
        if (!this.cloakerConfig.checkBrowserLanguage)
            return
        const cloakerRequestBody: CloakerRequestBody = this.req.body
        let browserLanguages = cloakerRequestBody.browserLanguages
        if (!browserLanguages || browserLanguages.length === 0)
            return this.firebaseService.addError("Não foi possível identificar o idioma do navegador")
        browserLanguages = browserLanguages.filter((language: string) => this.cloakerConfig.blockedBrowserLanguages.indexOf(language) !== -1)
        if (browserLanguages.length > 0)
            return this.firebaseService.addError(`Idioma não permitido | ${browserLanguages.join(', ')}`)
    }

    private getVpnApiData = async () => {
        this.vpnApiData = await requestApiData(this.req, this.firebaseService)
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
        const cloakerResponse: CloakerResponse = { filename: '', hiddenCode: '' }
        const errors = this.firebaseService.getErrors()
        if (errors.length === 0)
            cloakerResponse.filename = this.cloakerConfig.unsafePage
        else if (this.cloakerConfig.useTwoCloakers && errors.length >= 1 && errors.length <= 2)
            cloakerResponse.filename = this.cloakerConfig.fakeSafePage
        else
            cloakerResponse.filename = this.cloakerConfig.safePage
        cloakerResponse.hiddenCode = this.cloakerConfig.hiddenCode
        return cloakerResponse
    }
}