import { Request } from "express"

interface Error {
    errorCode: number
    msg: String
}

export class CloackerUtils {

    errors: Error[] = []

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
        const src = body['src']
        if (src === 'c22-bac512')
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
        let referencia: string = body['referencia']
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
                errorCode: 4,
                msg: 'Referencia Inválida'
            })
        }
    }

    validarIdiomasPermitidos(req: Request) {
        const body = req.body
        const idiomas = body['idiomas']
        if (!idiomas || idiomas.length === 0) {
            this.errors.push({
                errorCode: 5,
                msg: 'Idioma inválido'
            })
            return false
        }
        const idiomasString = idiomas.join(', ').toLowerCase()
        if (idiomasString.includes('pt')) {
            this.errors.push({
                errorCode: 5,
                msg: 'Idioma Não Permitido'
            })
            return false
        }
        return true
    }
}