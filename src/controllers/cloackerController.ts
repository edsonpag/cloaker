import { Request, Response } from "express";
import { CloackerUtils } from "../utils/cloackerUtils";

export class CloackerController {

    main(req: Request, res: Response) {
        const cloackerUtils = new CloackerUtils()
        cloackerUtils.validarDispositivoMobile(req)
        cloackerUtils.validarParametrosDaUrl(req)
        cloackerUtils.validarReferencia(req)
        cloackerUtils.validarIdiomasPermitidos(req)
        cloackerUtils.verificaPais(req)
        cloackerUtils.montarResposta(res)
        cloackerUtils.salvarFirebase()
        return
    }
}