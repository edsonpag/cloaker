import { CloackerSettings } from "../interfaces/cloackerSettings.interface";

export const cloackerSettings: CloackerSettings = {
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
}