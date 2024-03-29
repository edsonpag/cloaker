import { Request, Response } from "express"
import { Reader } from "@maxmind/geoip2-node"
import { CloackerError } from "../interfaces/cloackerError.interface"
import { responseA } from "../responses/a"
import { responseB } from "../responses/b"
import path from "path"

export class CloackerUtils {

    errors: CloackerError[] = []

    validarDispositivoMobile(req: Request) {
        const userAgent = req.useragent
        const isMobile = userAgent?.isMobile
        if (!isMobile) {
            this.errors.push({
                errorCode: 1,
                msg: `Dispositivo não permitido`,
                info: `Plataforma: ${userAgent?.platform} | OS: ${userAgent?.os}`
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
                msg: 'Src inexistente',
                info: ''
            })
            return false
        }
        if (src.includes('c22-bac512'))
            return true
        else {
            this.errors.push({
                errorCode: 2,
                msg: `Src inválido`,
                info: `src: ${src}`
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
                msg: 'Sem referencia',
                info: ''
            })
            return false
        }
        referencia = referencia.toLowerCase()
        if (referencia.includes('facebook') || referencia.includes('instagram'))
            return true
        else {
            this.errors.push({
                errorCode: 3,
                msg: `Referencia Inválida`,
                info: `Referencia: ${referencia}`
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
                msg: 'Idioma inválido',
                info: ''
            })
            return false
        }
        const idiomasString = idiomas.join(', ').toLowerCase()
        if (idiomasString.includes('pt')) {
            this.errors.push({
                errorCode: 4,
                msg: `Idioma Não Permitido`,
                info: `Idiomas: ${idiomasString}`
            })
            return false
        }
        return true
    }

    async verificaPais(req: Request) {
        const body = req.body
        const ip = body['d']
        if (!ip) {
            this.errors.push({
                errorCode: 5,
                msg: 'IP Não encontrado',
                info: ''
            })
            return false
        }
        const paisesBloqueados = ['BR']
        const reader = await Reader.open(path.join(__dirname, '..', 'databases', 'GeoLite2-Country.mmdb'))
        const response = reader.country(ip);
        const countryCode = response.country?.isoCode
        if (!countryCode) {
            this.errors.push({
                errorCode: 5,
                msg: `Country Code não encontrado`,
                info: `IP: ${ip}`
            })
            return false
        }
        if (paisesBloqueados.includes(countryCode)) {
            this.errors.push({
                errorCode: 5,
                msg: `Country Code bloqueado`,
                info: `IP: ${ip} | Country Code: ${countryCode}`
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
}