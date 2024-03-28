import { Request, Response } from "express";
import { CloackerUtils } from "./cloackerUtils";

export class CloackerController {

    main(req: Request, res: Response) {
        const cloackerUtils = new CloackerUtils()
        cloackerUtils.validarDispositivoMobile(req)
        cloackerUtils.validarParametrosDaUrl(req)
        cloackerUtils.validarReferencia(req)
        cloackerUtils.validarIdiomasPermitidos(req)
        console.log(cloackerUtils.errors)
        if (cloackerUtils.errors.length > 0) {
            res.json({
                headline: 'Descubra como um simples truque com abacaxi usado 3 vezes por semana pode restaurar sua visão',
                vturb: ''
            })
            return
        }
        res.json({
            headline: 'Nova Headline',
            vturb: ''
        })
        return
    }
}