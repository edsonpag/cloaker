import { Request, Response } from "express";
import { CloackerUtils } from "../utils/cloackerUtils";
import { response0 } from "../responses/viverbemcomsaude.online/a";
import { response1 } from "../responses/viverbemcomsaude.online/b";
import { response2 } from "../responses/viverbemcomsaude.online/c";
import { buenaSalud0 } from "../responses/buenaSalud/a";
import { buenaSalud1 } from "../responses/buenaSalud/b";
import { buenaSalud2 } from "../responses/buenaSalud/c";

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

    async buenaSalud(req: Request, res: Response) {
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
            res.json(buenaSalud0)
        else if (cloackerUtils.errors.length === 1 || cloackerUtils.errors.length === 2)
            res.json(buenaSalud1)
        else
            res.json(buenaSalud2)
        return
    }
}