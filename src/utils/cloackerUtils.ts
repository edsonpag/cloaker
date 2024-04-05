import { Request, Response } from "express"
import { Reader } from "@maxmind/geoip2-node"
import requestIp from "request-ip"
import { CloackerError } from "../interfaces/cloackerError.interface"
import { responseA } from "../responses/a"
import { responseB } from "../responses/b"
import { db } from "../firebase"
import path from "path"

export class CloackerUtils {

    errors: CloackerError[] = []

    validarDispositivoMobile(req: Request) {
        const userAgent = req.useragent
        const isMobile = userAgent?.isMobile
        if (!isMobile) {
            this.errors.push({
                errorCode: 1,
                msg: `Dispositivo não permitido | ${userAgent?.platform} | ${userAgent?.os}`
            })
            return false
        }
        return true
    }

    validarParametrosDaUrl(req: Request) {
        const body = req.body
        const src = body['a']
        if (!src) {
            this.errors.push({
                errorCode: 2,
                msg: 'Src inexistente'
            })
            return false
        }
        if (src.includes('c22-bac512'))
            return true
        else {
            this.errors.push({
                errorCode: 2,
                msg: `Src inválido | ${src}`
            })
            return false
        }
    }

    validarReferencia(req: Request) {
        const body = req.body
        let referencia: string = body['b']
        if (!referencia) {
            this.errors.push({
                errorCode: 3,
                msg: 'Sem referencia'
            })
            return false
        }
        referencia = referencia.toLowerCase()
        if (referencia.includes('facebook') || referencia.includes('instagram'))
            return true
        else {
            this.errors.push({
                errorCode: 3,
                msg: `Referencia Inválida | ${referencia}`
            })
            return false
        }
    }

    validarIdiomasPermitidos(req: Request) {
        const body = req.body
        const idiomas = body['c']
        if (!idiomas || idiomas.length === 0) {
            this.errors.push({
                errorCode: 4,
                msg: 'Idioma inválido'
            })
            return false
        }
        const idiomasString = idiomas.join(', ').toLowerCase()
        if (idiomasString.includes('pt')) {
            this.errors.push({
                errorCode: 4,
                msg: `Idioma Não Permitido | ${idiomasString}`
            })
            return false
        }
        return true
    }

    async verificaIp(req: Request) {
        const ip = requestIp.getClientIp(req)
        if (!ip) {
            this.errors.push({
                errorCode: 5,
                msg: 'IP Não encontrado'
            })
            return false
        }
        const paisesBloqueados = ['BR']
        const vpnApiResponse = await fetch(`https://vpnapi.io/api/${ip}?key=10d451ecb0064f1f9bc674f31576c845`)
        const vpnApiData = await vpnApiResponse.json()
        const countryCode = vpnApiData.location.country_code
        if (!countryCode) {
            this.errors.push({
                errorCode: 5,
                msg: `Country Code não encontrado | ${ip} |`
            })
            return false
        }
        if (paisesBloqueados.includes(countryCode)) {
            this.errors.push({
                errorCode: 5,
                msg: `Country Code bloqueado | ${ip} | ${countryCode}`
            })
            return false
        }
        const vpn = vpnApiData.security.vpn
        if (vpn) {
            this.errors.push({
                errorCode: 5,
                msg: `VPN DETECTADA | ${ip} | ${countryCode}`
            })
            return false
        }
        const proxy = vpnApiData.security.proxy
        if (proxy) {
            this.errors.push({
                errorCode: 5,
                msg: `PROXY DETECTADA | ${ip} | ${countryCode}`
            })
            return false
        }
        const tor = vpnApiData.security.tor
        if (tor) {
            this.errors.push({
                errorCode: 5,
                msg: `TOR DETECTADO | ${ip} | ${countryCode}`
            })
            return false
        }
        const relay = vpnApiData.security.relay
        if (relay) {
            this.errors.push({
                errorCode: 5,
                msg: `PRIVATE RELAY DETECTADA | ${ip} | ${countryCode}`
            })
            return false
        }
        return true 
    }

    montarResposta(res: Response) {
        console.log(this.errors)
        if (this.errors.length === 0)
            res.json(responseA)
        else if (this.errors.length > 0)
            res.json(responseB)
    }

    salvarFirebase() {
        if (this.errors.length > 0) {
            const logsRef = db.collection('logs')
            let errorsObj: any = { }
            for (let i = 0; i < this.errors.length; i++) {
                let iString = i.toString()
                errorsObj[iString] = this.errors[i]
            }
            errorsObj['date'] = new Date()
            logsRef.add(errorsObj)
        }
    }
}