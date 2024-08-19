import { Request, Response } from "express";
import { CloakerService } from "../services/cloakerService";

export const ritualSecretoRevelado = async (req: Request, res: Response) => {
    const cloakerConfig = {
        checkDesktop: false,
        checkBot: true,
        checkSecretCode: true,
        secretCode: 'bf6dad2c',
        checkReferrer: true,
        allowedReferrers: ['facebook', 'instagram'],
        checkSiteSourceName: true,
        allowedSitesSourceNames: ['fb', 'ig'],
        checkBrowserLanguage: false,
        blockedBrowserLanguages: [],
        filterCountries: false,
        blockedCountries: ['BR'],
        checkVpn: true,
        checkProxy: true,
        checkRelay: true,
        checkTor: true,
        useTwoCloakers: true,
        unsafePage: '84e3ca0f.html',
        safePage: 'default.html',
        fakeSafePage: 'frequencia-sonora.html',
        hiddenCode: '8c121c94'
    }
    const cloakerService = new CloakerService(req, cloakerConfig)
    const cloakerResponse = await cloakerService.executeCloakerValidations()
    return res.status(200).json(cloakerResponse)
}
