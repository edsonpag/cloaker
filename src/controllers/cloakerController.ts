import { Request, Response } from "express";
import { CloakerService } from "../services/cloakerService";
import { CloakerConfig } from "../interfaces/CloakerConfig";

export const ritualSecretoRevelado = async (req: Request, res: Response) => {
    const cloakerConfig: CloakerConfig = {
        checkDesktop: true,
        checkBot: true,
        checkSecretCode: true,
        secretCode: 'bf6dad2c',
        checkReferrer: true,
        allowedReferrers: ['facebook', 'instagram'],
        checkSiteSourceName: true,
        allowedSitesSourceNames: ['fb', 'ig'],
        checkBrowserLanguage: false,
        blockedBrowserLanguages: [],
        filterCountries: true,
        blockedCountries: ['BR'],
        checkVpn: true,
        checkProxy: true,
        checkRelay: true,
        checkTor: true,
        useTwoCloakers: true
    }
    return res.status(200).json(new CloakerService(req, cloakerConfig).executeCloakerValidations())
}
