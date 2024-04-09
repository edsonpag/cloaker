import { Request, Response } from "express";
import path from "path";
import { CloackerUtils } from "../utils/cloackerUtils";
import { CloackerSettings } from "../interfaces/cloackerSettings.interface";

export class CloackerController {

    async main(req: Request, res: Response) {
        const origin: string = req.headers.origin!
        const cloackerSettings: CloackerSettings = await import(path.join(__dirname, '..', 'settings', `${origin.replace('https://', '')}.ts`))
        const cloackerUtils = new CloackerUtils(cloackerSettings)
        cloackerUtils.validarDispositivoMobile(req)
        cloackerUtils.validarParametrosDaUrl(req)
        cloackerUtils.validarReferencia(req)
        cloackerUtils.validarIdiomasPermitidos(req)
        await cloackerUtils.verificaIp(req)
        cloackerUtils.salvarFirebase()
        await cloackerUtils.montarResposta(res, origin)
        return
    }
}