import { Request, Response } from "express";
import { CloackerUtils } from "../utils/cloackerUtils";
import { ritualSecretoRevelado0 } from "../responses/ritualsecretorevelado/a";
import { ritualSecretoRevelado1 } from "../responses/ritualsecretorevelado/b";
import { seriskin0 } from "../responses/seriskin/a";
import { seriskin1 } from "../responses/seriskin/b";


export class CloackerController {

    async ritualsecretorevelado(req: Request, res: Response) {
        const cloackerUtils = new CloackerUtils({
            checkDesktop: true,
            validarParametrosDaUrl: true,
            parametroParaValidar: 'ct5ger',
            validarIp: true,
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

    async seriskin(req: Request, res: Response) {
        const cloackerUtils = new CloackerUtils({
            checkDesktop: true,
            validarParametrosDaUrl: true,
            parametroParaValidar: '1de2f342',
            validarIp: true,
            paisesBloqueados: ['BR']
        })
        cloackerUtils.validarPc(req)
        cloackerUtils.validarParametrosDaUrl(req)
        await cloackerUtils.verificaIp(req)
        cloackerUtils.salvarFirebase()
        if (cloackerUtils.errors.length === 0)
            res.json(seriskin0)
        else
            res.json(seriskin1)
        return
    }
}