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
        const src = body['a']
        if (!src) {
            this.errors.push({
                errorCode: 2,
                msg: 'Src inexistente'
            })
            return
        }
        const parameters = src.split('|')
        const campaignName = parameters[0]
        if (!campaignName.includes(this.cloackerSettings.parametroParaValidar)) {
            this.errors.push({
                errorCode: 3,
                msg: `Campaign Name inválido | ${src}`
            })
        }
        const siteSourceName = parameters[4]
        // && siteSourceName !== 'an' && siteSourceName !== 'msg' (caso comece a rodar no messanger ou no audience network)
        if (siteSourceName !== 'fb' && siteSourceName !== 'ig') {
            this.errors.push({
                errorCode: 4,
                msg: `Site Source Name inválido | ${src}`
            })
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