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
        res.setHeader('content-type', 'text/plain');
        if (cloackerUtils.errors.length === 0)
            return res.send('truque-natural-visao.html')
        else if (cloackerUtils.errors.length === 1)
            return res.send('cha-anti-oculos.html')
        return res.send('default.html')
    }
}