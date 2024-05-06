import { Request, Response } from "express";
import { CloackerUtils } from "../utils/cloackerUtils";
import { responseATruqueSaudavel } from "../responses/truquesaudavel.online/a";
import { responseCTruqueSaudavel } from "../responses/truquesaudavel.online/c";
import { responseBTruqueSaudavel } from "../responses/truquesaudavel.online/b";

export class CloackerController {

    async truqueSaudavel(req: Request, res: Response) {
        const cloackerUtils = new CloackerUtils({
            validarMobile: true,
            validarParametrosDaUrl: true,
            parametroParaValidar: 'c22-bac512',
            validarReferencia: true,
            referenciasPermitidas: ['facebook', 'instagram'],
            validarIdiomasDoNavegador: false,
            idiomasBloqueados: [],
            validarIp: true,
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
            res.json(responseATruqueSaudavel)
        else if (cloackerUtils.errors.length > 0 && cloackerUtils.errors.length <= 2)
            res.json(responseCTruqueSaudavel)
        else
            res.json(responseBTruqueSaudavel)
        return
    }
}