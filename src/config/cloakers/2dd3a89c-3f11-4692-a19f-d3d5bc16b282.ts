import { CloakerConfig } from "../../interfaces/CloakerConfig";

const config: CloakerConfig = {
    cloakerId: '2dd3a89c-3f11-4692-a19f-d3d5bc16b282',
    checkDesktop: true,
    checkBot: true,
    checkSecretCode: true,
    secretCode: 'bf6dad2c',
    checkReferrer: true,
    allowedReferrers: ['facebook', 'instagram'],
    checkSiteSourceName: true,
    allowedSitesSourceNames: ['fb', 'ig'],
    checkBrowserLanguage: true,
    blockedBrowserLanguages: ['pt-BR'],
    filterCountries: true,
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

export default config