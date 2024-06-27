import { Request, Response } from "express";
import { CloackerUtilsLegacy } from "../utils/cloakerUtilsLegacy";
import { responseATruqueNaturalSaudavel } from "../responses/truquenaturalsaudavel.online/a";
import { responseCTruqueNaturalSaudavel } from "../responses/truquenaturalsaudavel.online/c";
import { responseBTruqueNaturalSaudavel } from "../responses/truquenaturalsaudavel.online/b";
import { responseABuenaSalud } from "../responses/buena-salud.online/a";
import { responseBBuenaSalud } from "../responses/buena-salud.online/b";
import { responseAViverBemComSaude } from "../responses/viverbemcomsaude.online/a";
import { responseBViverBemComSaude } from "../responses/viverbemcomsaude.online/b";

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
            res.json(responseATruqueNaturalSaudavel)
        else if (cloackerUtils.errors.length > 0 && cloackerUtils.errors.length <= 2)
            res.json(responseCTruqueNaturalSaudavel)
        else
            res.json(responseBTruqueNaturalSaudavel)
        return
    }

    async trucosNaturales(req: Request, res: Response) {
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
            res.json(responseABuenaSalud)
        else if (cloackerUtils.errors.length > 0)
            res.json(responseBBuenaSalud)
        return
    }

    async viverBemComSaude(req: Request, res: Response) {
        const cloackerUtils = new CloackerUtilsLegacy({
            validarMobile: true,
            validarParametrosDaUrl: true,
            parametroParaValidar: 'c22-bac512',
            validarReferencia: false,
            referenciasPermitidas: [],
            validarIdiomasDoNavegador: false,
            idiomasBloqueados: [],
            validarIp: false,
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