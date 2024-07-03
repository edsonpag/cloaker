import { Request, Response } from "express";
import { CloackerUtilsLegacy } from "../utils/cloakerUtilsLegacy";
import { responseAViverBemComSaude } from "../responses/viverbemcomsaude.online/a";
import { responseBViverBemComSaude } from "../responses/viverbemcomsaude.online/b";
import { responseCViverBemComSaude } from "../responses/viverbemcomsaude.online/c";

export class CloackerControllerLegacy {

    async viverBemComSaude(req: Request, res: Response) {
        const cloackerUtils = new CloackerUtilsLegacy({
            validarMobile: false,
            validarParametrosDaUrl: true,
            parametroParaValidar: 'c22-bac512',
            validarReferencia: false,
            referenciasPermitidas: [],
            validarIdiomasDoNavegador: false,
            idiomasBloqueados: [],
            validarIp: true,
            paisesBloqueados: ['BR'],
            utilizarDoisCloacker: true
        })
        cloackerUtils.validarDispositivoMobile(req)
        cloackerUtils.validarParametrosDaUrl(req)
        cloackerUtils.validarIdiomasPermitidos(req)
        await cloackerUtils.verificaIp(req)
        cloackerUtils.salvarFirebase()
        if (cloackerUtils.errors.length === 0)
            res.json(responseAViverBemComSaude)
        else if (cloackerUtils.errors.length > 0 && cloackerUtils.errors.length <= 2)
            res.json(responseCViverBemComSaude)
        else
            res.json(responseBViverBemComSaude)
        return
    }
}