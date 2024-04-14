import { Request, Response } from "express";
import { CloackerUtils } from "../utils/cloackerUtils";
import { responseABuenaSalud } from "../responses/buena-salud.online/a";
import { responseBBuenaSalud } from "../responses/buena-salud.online/b";
import { responseATrucosNaturales } from "../responses/trucosnaturales.online/a";
import { responseBTrucosNaturales } from "../responses/trucosnaturales.online/b";
import { responseAViverBemComSaude } from "../responses/viverbemcomsaude.online/a";
import { responseBViverBemComSaude } from "../responses/viverbemcomsaude.online/b";
import { responseCViverBemComSaude } from "../responses/viverbemcomsaude.online/c";
import { responseARitualSecretoRevelado } from "../responses/ritualsecretorevelado.online/a";
import { responseBRitualSecretoRevelado } from "../responses/ritualsecretorevelado.online/b";
import { responseATruqueSaudavel } from "../responses/truquesaudavel.online/a";
import { responseCTruqueSaudavel } from "../responses/truquesaudavel.online/c";
import { responseBTruqueSaudavel } from "../responses/truquesaudavel.online/b";

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
            parametroParaValidar: 'CT8',
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
            res.json(responseAViverBemComSaude)
        else if (cloackerUtils.errors.length > 0 && cloackerUtils.errors.length <= 2)
            res.json(responseCViverBemComSaude)
        else
            res.json(responseBViverBemComSaude)
        return
    }

    async ondaCerebral(req: Request, res: Response) {
        const cloackerUtils = new CloackerUtils({
            validarMobile: true,
            validarParametrosDaUrl: true,
            parametroParaValidar: 'c22-bac512',
            validarReferencia: false,
            referenciasPermitidas: [],
            validarIdiomasDoNavegador: false,
            idiomasBloqueados: [],
            validarIp: false,
            paisesBloqueados: [],
            utilizarDoisCloacker: false
        })
        cloackerUtils.validarDispositivoMobile(req)
        cloackerUtils.validarParametrosDaUrl(req)
        cloackerUtils.validarReferencia(req)
        cloackerUtils.validarIdiomasPermitidos(req)
        await cloackerUtils.verificaIp(req)
        cloackerUtils.salvarFirebase()
        if (cloackerUtils.errors.length === 0)
            res.json(responseARitualSecretoRevelado)
        else if (cloackerUtils.errors.length > 0)
            res.json(responseBRitualSecretoRevelado)
        return
    }

    async truqueSaudavel(req: Request, res: Response) {
        const cloackerUtils = new CloackerUtils({
            validarMobile: true,
            validarParametrosDaUrl: true,
            parametroParaValidar: 'c22-bac512',
            validarReferencia: false,
            referenciasPermitidas: [],
            validarIdiomasDoNavegador: false,
            idiomasBloqueados: [],
            validarIp: false,
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
            res.json(responseATruqueSaudavel)
        else if (cloackerUtils.errors.length > 0 && cloackerUtils.errors.length <= 2)
            res.json(responseCTruqueSaudavel)
        else
            res.json(responseBTruqueSaudavel)
        return
    }
}