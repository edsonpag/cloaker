import { Request, Response } from "express";
import { CloackerUtils } from "../utils/cloackerUtils";

export class CloackerController {

    async main(req: Request, res: Response) {
        const cloackerUtils = new CloackerUtils()
        await cloackerUtils.verificaPais(req)
        cloackerUtils.validarDispositivoMobile(req)
        cloackerUtils.validarParametrosDaUrl(req)
        cloackerUtils.validarReferencia(req)
        cloackerUtils.validarIdiomasPermitidos(req)
        cloackerUtils.montarResposta(res)
        return
    }
}