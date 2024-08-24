import { Request, Response } from "express";
import { CloackerUtils } from "../utils/cloackerUtils";
import { response0 } from "../responses/viverbemcomsaude.online/a";
import { response1 } from "../responses/viverbemcomsaude.online/b";
import { response2 } from "../responses/viverbemcomsaude.online/c";

export class CloackerController {

    async ritualsecretorevelado(req: Request, res: Response) {
        const cloackerUtils = new CloackerUtils({
            checkDesktop: false,
            validarParametrosDaUrl: true,
            parametroParaValidar: 'bf6dad2c',
            validarIp: false,
            paisesBloqueados: ['BR']
        })
        cloackerUtils.validarPc(req)
        cloackerUtils.validarParametrosDaUrl(req)
        await cloackerUtils.verificaIp(req)
        cloackerUtils.salvarFirebase()
        if (cloackerUtils.errors.length === 0)
            res.json(response0)
        else if (cloackerUtils.errors.length === 1 || cloackerUtils.errors.length === 2)
            res.json(response1)
        else
            res.json(response2)
        return
    }
}