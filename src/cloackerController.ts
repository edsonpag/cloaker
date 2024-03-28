import { Request, Response } from "express";
import { CloackerUtils } from "./cloackerUtils";

export class CloackerController {

    main(req: Request, res: Response) {
        const cloackerUtils = new CloackerUtils()
        cloackerUtils.validarDispositivoMobile(req)
        cloackerUtils.validarParametrosDaUrl(req)
        cloackerUtils.validarReferencia(req)
        cloackerUtils.validarIdiomasPermitidos(req)
        if (cloackerUtils.errors.length > 0) {
            return
        }
        return
    }
}