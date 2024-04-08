import { Request, Response } from "express";
import { CloackerUtils } from "../utils/cloackerUtils";

export class CloackerController {

    async main(req: Request, res: Response) {
        const cloackerUtils = new CloackerUtils()
        cloackerUtils.validarDispositivoMobile(req)
        cloackerUtils.validarParametrosDaUrl(req)
        cloackerUtils.validarReferencia(req)
        cloackerUtils.validarIdiomasPermitidos(req)
        await cloackerUtils.verificaIp(req)
        cloackerUtils.salvarFirebase()
        cloackerUtils.montarResposta(req, res)
        return
    }
}