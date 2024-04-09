import { Request, Response } from "express";
import { CloackerUtils } from "../utils/cloackerUtils";
import { responseABuenaSalud } from "../responses/buena-salud.online/a";
import { responseBBuenaSalud } from "../responses/buena-salud.online/b";
import { responseATrucosNaturales } from "../responses/trucosnaturales.online/a";
import { responseBTrucosNaturales } from "../responses/trucosnaturales.online/b";

export class CloackerController {

    async buenaSalud(req: Request, res: Response) {
        const cloackerUtils = new CloackerUtils({
            validarMobile: true,
            validarParametrosDaUrl: true,
            parametroParaValidar: 'c22-bac512',
            validarReferencia: true,
            referenciasPermitidas: ['facebook', 'instagram'],
            validarIdiomasDoNavegador: true,
            idiomasBloqueados: ['pt-BR'],
            validarIp: true,
            paisesBloqueados: ['BR'],
            utilizarDoisCloacker: false
        })
        cloackerUtils.validarDispositivoMobile(req)
        cloackerUtils.validarParametrosDaUrl(req)
        cloackerUtils.validarReferencia(req)
        cloackerUtils.validarIdiomasPermitidos(req)
        await cloackerUtils.verificaIp(req)
        cloackerUtils.salvarFirebase()
        if (cloackerUtils.errors.length === 0)
            res.json(responseABuenaSalud)
        else if (cloackerUtils.errors.length > 0)
            res.json(responseBBuenaSalud)
        return
    }

    async trucosNaturales(req: Request, res: Response) {
        const cloackerUtils = new CloackerUtils({
            validarMobile: true,
            validarParametrosDaUrl: true,
            parametroParaValidar: 'c22-bac512',
            validarReferencia: true,
            referenciasPermitidas: ['facebook', 'instagram'],
            validarIdiomasDoNavegador: true,
            idiomasBloqueados: ['pt-BR'],
            validarIp: true,
            paisesBloqueados: ['BR'],
            utilizarDoisCloacker: false
        })
        cloackerUtils.validarDispositivoMobile(req)
        cloackerUtils.validarParametrosDaUrl(req)
        cloackerUtils.validarReferencia(req)
        cloackerUtils.validarIdiomasPermitidos(req)
        await cloackerUtils.verificaIp(req)
        cloackerUtils.salvarFirebase()
        if (cloackerUtils.errors.length === 0)
            res.json(responseATrucosNaturales)
        else if (cloackerUtils.errors.length > 0)
            res.json(responseBTrucosNaturales)
        return
    }

    
    async viverBemComSaude(req: Request, res: Response) {
        const cloackerUtils = new CloackerUtils({
            validarMobile: true,
            validarParametrosDaUrl: true,
            parametroParaValidar: 'c22-bac512',
            validarReferencia: true,
            referenciasPermitidas: ['facebook', 'instagram'],
            validarIdiomasDoNavegador: false,
            idiomasBloqueados: [],
            validarIp: true,
            paisesBloqueados: [],
            utilizarDoisCloacker: true
        })
        cloackerUtils.validarDispositivoMobile(req)
        cloackerUtils.validarParametrosDaUrl(req)
        cloackerUtils.validarReferencia(req)
        cloackerUtils.validarIdiomasPermitidos(req)
        await cloackerUtils.verificaIp(req)
        cloackerUtils.salvarFirebase()
        if (cloackerUtils.errors.length === 0)
            res.json(responseATrucosNaturales)
        else if (cloackerUtils.errors.length > 0)
            res.json(responseBTrucosNaturales)
        return
    }
}