import { Request, Response } from "express";
import { CloackerUtils } from "../utils/cloackerUtils";
import { ritualSecretoRevelado0 } from "../responses/ritualsecretorevelado/a";
import { ritualSecretoRevelado1 } from "../responses/ritualsecretorevelado/b";


export class CloackerController {

    async ritualsecretorevelado(req: Request, res: Response) {
        const cloackerUtils = new CloackerUtils({
            checkDesktop: true,
            validarParametrosDaUrl: true,
            parametroParaValidar: 'ct5ger',
            validarIp: false,
            paisesBloqueados: ['BR']
        })
        cloackerUtils.validarPc(req)
        cloackerUtils.validarParametrosDaUrl(req)
        await cloackerUtils.verificaIp(req)
        cloackerUtils.salvarFirebase()
        if (cloackerUtils.errors.length === 0)
            res.json(ritualSecretoRevelado0)
        else
            res.json(ritualSecretoRevelado1)
        return
    }
}