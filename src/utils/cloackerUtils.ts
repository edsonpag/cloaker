import { Request, Response } from "express"
import { CloackerError } from "../interfaces/cloackerError.interface"
import { responseA } from "../responses/a"
import { responseB } from "../responses/b"

export class CloackerUtils {

    errors: CloackerError[] = []

    validarDispositivoMobile(req: Request) {
        const userAgent = req.useragent
        const isMobile = userAgent?.isMobile
        if (!isMobile) {
            this.errors.push({
                errorCode: 1,
                msg: 'Dispositivo não permitido'
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
                msg: 'Src inválido'
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
                msg: 'Referencia Inválida'
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
                msg: 'Idioma Não Permitido'
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