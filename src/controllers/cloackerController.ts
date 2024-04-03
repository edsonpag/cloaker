import { Request, Response } from "express";
import { CloackerUtils } from "../utils/cloackerUtils";

export class CloackerController {

    async main(req: Request, res: Response) {
        const cloackerUtils = new CloackerUtils()
        console.log('ref: ' + req.get('Referrer'))
        cloackerUtils.validarDispositivoMobile(req)
        cloackerUtils.validarParametrosDaUrl(req)
        cloackerUtils.validarReferencia(req)
        cloackerUtils.validarIdiomasPermitidos(req)
        await cloackerUtils.verificaPais(req)
        cloackerUtils.montarResposta(res)
        cloackerUtils.salvarFirebase()
        return
    }
}