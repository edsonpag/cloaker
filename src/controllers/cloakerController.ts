import { Request, Response } from "express";
import { CloakerService } from "../services/cloakerService";
import { CloakerConfig } from "../interfaces/CloakerConfig";

export const ritualSecretoRevelado = async (req: Request, res: Response) => {
    const cloakerConfig: CloakerConfig = {
        checkDesktop: false,
        checkBot: true,
        checkSecretCode: true,
        secretCode: 'bf6dad2c',
        checkReferrer: true,
        allowedReferrers: ['facebook', 'instagram'],
        checkSiteSourceName: true,
        allowedSitesSourceNames: ['fb', 'ig'],
        filterCountries: false,
        blockedCountries: ['BR'],
        checkVpn: true,
        checkProxy: true,
        checkRelay: true,
        checkTor: true,
        useTwoCloakers: true
    }
    const cloakerService = new CloakerService(req, cloakerConfig)
    const cloakerResponse = await cloakerService.executeCloakerValidations()
    return res.status(200).json(cloakerResponse)
}
