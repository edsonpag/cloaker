import { Request } from "express"
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

    validarPc(req: Request) {
        if (!this.cloackerSettings.checkDesktop)
            return
        const userAgent = req.useragent
        const isDesktop = userAgent?.isDesktop
        if (isDesktop) 
            this.errors.push({
                errorCode: 2,
                msg: 'Dispositivo Desktop não permitido'
            })
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