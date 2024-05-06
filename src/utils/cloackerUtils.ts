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