import { Request, Response } from "express"
import { Reader } from "@maxmind/geoip2-node"
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

    verificaIp(req: Request) {
        const body = req.body
        const ipApiData = body['d']
        const { countryCode, proxy, hosting, query } = ipApiData
        if (!query) {
            this.errors.push({
                errorCode: 5,
                msg: 'IP Não encontrado'
            })
            return false
        }
        if (!countryCode) {
            this.errors.push({
                errorCode: 5,
                msg: `Country Code não encontrado | ${query}`
            })
            return false
        }
        const paisesBloqueados = ['BR']
        if (paisesBloqueados.includes(countryCode)) {
            this.errors.push({
                errorCode: 5,
                msg: `Country Code bloqueado | ${query} | ${countryCode}`
            })
            return false
        }
        if (proxy) {
            this.errors.push({
                errorCode: 5,
                msg: `Proxy, VPN ou TOR | ${query} | ${countryCode}`
            })
            return false
        }
        if (hosting) {
            this.errors.push({
                errorCode: 5,
                msg: `Hosting ou Data Center | ${query} | ${countryCode}`
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