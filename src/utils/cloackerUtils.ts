import { Request, Response } from "express"
import requestIp from "request-ip"
import { CloackerError } from "../interfaces/cloackerError.interface"
import { db } from "../firebase"
import { CloackerSettings } from "../interfaces/cloackerSettings.interface"

export class CloackerUtils {

    cloackerSettings: CloackerSettings

    errors: CloackerError[] = []

    constructor(cloackerSettings: CloackerSettings) {
        this.cloackerSettings = cloackerSettings
    }

    validarDispositivoMobile(req: Request) {
        if (!this.cloackerSettings.validarMobile)
            return
        const userAgent = req.useragent
        const isMobile = userAgent?.isMobile
        if (!isMobile) {
            this.errors.push({
                errorCode: 1,
                msg: `Dispositivo não permitido | ${userAgent?.platform} | ${userAgent?.os}`
            })
        }
    }

    validarParametrosDaUrl(req: Request) {
        if (!this.cloackerSettings.validarParametrosDaUrl)
            return
        const body = req.body
        const url = body['a']
        if (!url) {
            this.errors.push({
                errorCode: 2,
                msg: 'Src inexistente'
            })
            return
        }
        if (!url.includes(this.cloackerSettings.parametroParaValidar)) {
            this.errors.push({
                errorCode: 3,
                msg: `Src inválido | ${url}`
            })
        }
    }

    validarReferencia(req: Request) {
        const body = req.body
        let referencia: string = body['b']
        if (!referencia) {
            this.errors.push({
                errorCode: 4,
                msg: 'Sem referencia'
            })
            return
        }
        let referenciaValida = false
        referencia = referencia.toLowerCase()
        for (let referenciaPermitida of this.cloackerSettings.referenciasPermitidas) {
            if (referenciaPermitida.includes(referencia)) {
                referenciaValida = true
                break
            }
        }
        if (!referenciaValida) {
            this.errors.push({
                errorCode: 5,
                msg: `Referencia Inválida | ${referencia}`
            })
        }
    }

    validarIdiomasPermitidos(req: Request) {
        if (!this.cloackerSettings.validarIdiomasDoNavegador)
            return
        const body = req.body
        const idiomas = body['c']
        if (!idiomas || idiomas.length === 0) {
            this.errors.push({
                errorCode: 6,
                msg: 'Idioma não encontrado'
            })
            return
        }
        let idiomaBloqueado = idiomas.some((idioma: string) => this.cloackerSettings.idiomasBloqueados.indexOf(idioma) !== -1)
        if (idiomaBloqueado) {
            this.errors.push({
                errorCode: 7,
                msg: `Idioma Não Permitido | ${idiomas.join(', ')}`
            })
        }
    }

    async verificaIp(req: Request) {
        if (!this.cloackerSettings.validarIp)
            return
        const ip = requestIp.getClientIp(req)
        if (!ip) {
            this.errors.push({
                errorCode: 8,
                msg: 'IP Não encontrado'
            })
            return
        }
        const vpnApiResponse = await fetch(`https://vpnapi.io/api/${ip}?key=10d451ecb0064f1f9bc674f31576c845`)
        const vpnApiData = await vpnApiResponse.json()
        const countryCode = vpnApiData.location.country_code
        if (!countryCode) {
            this.errors.push({
                errorCode: 9,
                msg: `Country Code não encontrado | ${ip} |`
            })
            return
        }
        if (this.cloackerSettings.paisesBloqueados.includes(countryCode)) {
            this.errors.push({
                errorCode: 10,
                msg: `Country Code bloqueado | ${ip} | ${countryCode}`
            })
            return
        }
        const vpn = vpnApiData.security.vpn
        if (vpn) {
            this.errors.push({
                errorCode: 11,
                msg: `VPN DETECTADA | ${ip} | ${countryCode}`
            })
            return
        }
        const proxy = vpnApiData.security.proxy
        if (proxy) {
            this.errors.push({
                errorCode: 12,
                msg: `PROXY DETECTADA | ${ip} | ${countryCode}`
            })
            return
        }
        const tor = vpnApiData.security.tor
        if (tor) {
            this.errors.push({
                errorCode: 13,
                msg: `TOR DETECTADO | ${ip} | ${countryCode}`
            })
            return
        }
        const relay = vpnApiData.security.relay
        if (relay) {
            this.errors.push({
                errorCode: 14,
                msg: `PRIVATE RELAY DETECTADA | ${ip} | ${countryCode}`
            })
            return
        }
    }

    async montarResposta(res: Response, origin: string) {
        if (!this.cloackerSettings.utilizarDoisCloacker) {
            if (this.errors.length === 0) {
                const response = await import(`../responses/${origin}/a.ts`)
                res.json(response)
            }
            else if (this.errors.length > 0) {
                const response = await import(`../responses/${origin}/b.ts`)
                res.json(response)
            }
        }
    }

    salvarFirebase() {
        if (this.errors.length > 0) {
            const logsRef = db.collection('logs')
            let errorsObj: any = {}
            for (let i = 0; i < this.errors.length; i++) {
                let iString = i.toString()
                errorsObj[iString] = this.errors[i]
            }
            errorsObj['date'] = new Date()
            logsRef.add(errorsObj)
        }
    }
}