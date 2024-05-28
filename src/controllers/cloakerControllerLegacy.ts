import { Request, Response } from "express";
import { CloackerUtilsLegacy } from "../utils/cloakerUtilsLegacy";
import { responseATruqueNaturalSaudavel } from "../responses/truquenaturalsaudavel.online/a";
import { responseCTruqueNaturalSaudavel } from "../responses/truquenaturalsaudavel.online/c";
import { responseBTruqueNaturalSaudavel } from "../responses/truquenaturalsaudavel.online/b";

export class CloackerControllerLegacy {

    async truqueNaturalSaudavel(req: Request, res: Response) {
        const cloackerUtils = new CloackerUtilsLegacy({
            validarMobile: true,
            validarParametrosDaUrl: true,
            parametroParaValidar: 'CT8',
            validarReferencia: false,
            referenciasPermitidas: [],
            validarIdiomasDoNavegador: false,
            idiomasBloqueados: [],
            validarIp: false,
            paisesBloqueados: ['BR'],
            utilizarDoisCloacker: true
        })
        cloackerUtils.validarDispositivoMobile(req)
        cloackerUtils.validarParametrosDaUrl(req)
        cloackerUtils.validarReferencia(req)
        cloackerUtils.validarIdiomasPermitidos(req)
        await cloackerUtils.verificaIp(req)
        cloackerUtils.salvarFirebase()
        if (cloackerUtils.errors.length === 0)
            res.json(responseATruqueNaturalSaudavel)
        else if (cloackerUtils.errors.length > 0 && cloackerUtils.errors.length <= 2)
            res.json(responseCTruqueNaturalSaudavel)
        else
            res.json(responseBTruqueNaturalSaudavel)
        return
    }
}