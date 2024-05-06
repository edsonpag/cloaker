import { Request, Response } from "express";
import { CloackerUtils } from "../utils/cloackerUtils";

export class CloackerController {

    async truqueSaudavel(req: Request, res: Response) {
        const cloackerUtils = new CloackerUtils({
            validarMobile: true,
            validarParametrosDaUrl: true,
            parametroParaValidar: '91e9-28a'
        })
        cloackerUtils.validarDispositivoMobile(req)
        cloackerUtils.validarParametrosDaUrl(req)
        cloackerUtils.salvarFirebase()
        if (cloackerUtils.errors.length === 0)
            res.json({ page: 'truque-natural-visao.html' })
        else if (cloackerUtils.errors.length > 0 && cloackerUtils.errors.length <= 2)
            res.json({ page: 'cha-anti-oculos.html' })
        else
            res.json({ page: 'default.html' })
        return
    }
}