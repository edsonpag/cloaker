import { Request } from "express";
import { getCloakerConfig } from "../config";
import { checkBot, checkDesktop } from "../utils/deviceUtils";
import { checkSecretCode } from "../utils/secretCodeUtils";
import { checkReferrer } from "../utils/referrerUtils";
import { checkSiteSourceName } from "../utils/siteSourceNameUtils";
import { checkBrowserLanguage } from "../utils/browserLanguageUtils";
import { requestApiData } from "../apis/vpn_api/services/vpnService";
import { checkProxy, checkRelay, checkTor, checkVpn, filterBlockedCountries } from "../utils/connectionFilterUtils";
import { CloakerConfig } from "../interfaces/CloakerConfig";
import { getErrors, persistErrors } from "../apis/firebase_api/firebase";
import { CloakerResponse } from "../interfaces/CloakerResponse";

export const executeCloakerValidations = async (req: Request): Promise<CloakerResponse> => {
    const cloakerConfig = getCloakerConfig(req)
    checkDesktop(req, cloakerConfig)
    checkBot(req, cloakerConfig)
    checkSecretCode(req, cloakerConfig)
    checkReferrer(req, cloakerConfig)
    checkSiteSourceName(req, cloakerConfig)
    checkBrowserLanguage(req, cloakerConfig)
    const vpnApiData = await requestApiData(req)
    if (vpnApiData !== null) {
        filterBlockedCountries(req, cloakerConfig, vpnApiData)
        checkVpn(cloakerConfig, vpnApiData)
        checkProxy(cloakerConfig, vpnApiData)
        checkRelay(cloakerConfig, vpnApiData)
        checkTor(cloakerConfig, vpnApiData)
    }
    persistErrors(vpnApiData)
    return createCloakerResponse(cloakerConfig)
}

export const createCloakerResponse = (cloakerConfig: CloakerConfig): CloakerResponse => {
    const cloakerResponse: CloakerResponse = { filename: '', hiddenCode: '' }
    const errors = getErrors()
    if (errors.length === 0)
        cloakerResponse.filename = cloakerConfig.unsafePage
    else if (cloakerConfig.useTwoCloakers && errors.length >= 1 && errors.length <= 2)
        cloakerResponse.filename = cloakerConfig.fakeSafePage
    else
        cloakerResponse.filename = cloakerConfig.safePage
    cloakerResponse.hiddenCode = cloakerConfig.hiddenCode
    return cloakerResponse
}