import { Request, Response } from "express";
import { CloackerUtilsLegacy } from "../utils/cloakerUtilsLegacy";
import { responseAViverBemComSaude } from "../responses/viverbemcomsaude.online/a";
import { responseBViverBemComSaude } from "../responses/viverbemcomsaude.online/b";

export class CloackerControllerLegacy {

    async viverBemComSaude(req: Request, res: Response) {
        const cloackerUtils = new CloackerUtilsLegacy({
            validarMobile: true,
            validarParametrosDaUrl: true,
            parametroParaValidar: 'c22-bac512',
            validarReferencia: false,
            referenciasPermitidas: [],
            validarIdiomasDoNavegador: false,
            idiomasBloqueados: [],
            validarIp: true,
            paisesBloqueados: ['BR'],
            utilizarDoisCloacker: false
        })
        cloackerUtils.validarDispositivoMobile(req)
        cloackerUtils.validarParametrosDaUrl(req)
        cloackerUtils.validarIdiomasPermitidos(req)
        await cloackerUtils.verificaIp(req)
        cloackerUtils.salvarFirebase()
        if (cloackerUtils.errors.length === 0)
            res.json(responseAViverBemComSaude)
        else if (cloackerUtils.errors.length > 0)
            res.json(responseBViverBemComSaude)
        return
    }
}