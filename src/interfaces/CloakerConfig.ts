export interface CloakerConfig {
    checkDesktop: boolean
    checkBot: boolean
    checkSecretCode: boolean
    secretCode: string
    checkReferrer: boolean
    allowedReferrers: string[]
    checkSiteSourceName: boolean
    allowedSitesSourceNames: string[]
    checkBrowserLanguage: boolean
    blockedBrowserLanguages: string[]
    filterCountries: boolean
    blockedCountries: string[]
    checkVpn: boolean
    checkProxy: boolean
    checkRelay: boolean
    checkTor: boolean
    useTwoCloakers: boolean
    unsafePage: string
    safePage: string
    fakeSafePage: string
    hiddenCode: string
}