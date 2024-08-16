import { Request } from 'express';
import { addError } from '../apis/firebase_api/firebase';
import { CloakerConfig } from '../interfaces/CloakerConfig';
import { VPNResponse } from '../apis/vpn_api/interfaces/VPNResponse';


export const filterBlockedCountries = (req: Request, cloakerConfig: CloakerConfig, vpnApiData: VPNResponse) => {
    if(!cloakerConfig.filterCountries)
        return
    const countryCode = vpnApiData.location.country_code
    if (!countryCode)
        return addError('Country Code Não Encontrado')
    const isBlockedCountry = cloakerConfig.blockedCountries.includes(countryCode)
    if (isBlockedCountry)
        addError(`Country Blocked | ${countryCode} | ${vpnApiData.ip}`)
}

export const checkVpn = (cloakerConfig: CloakerConfig, vpnApiData: VPNResponse) => {
    if (!cloakerConfig.checkVpn)
        return
    if (vpnApiData.security.vpn)
        addError(`VPN DETECTADA | ${vpnApiData.ip}`)
}

export const checkProxy = (cloakerConfig: CloakerConfig, vpnApiData: VPNResponse) => {
    if (!cloakerConfig.checkProxy)
        return
    if (vpnApiData.security.proxy)
        addError(`PROXY DETECTADA | ${vpnApiData.ip}`)
}

export const checkRelay = (cloakerConfig: CloakerConfig, vpnApiData: VPNResponse) => {
    if (!cloakerConfig.checkRelay)
        return
    if (vpnApiData.security.relay)
        addError(`RELAY DETECTADA | ${vpnApiData.ip}`)
}

export const checkTor = (cloakerConfig: CloakerConfig, vpnApiData: VPNResponse) => {
    if (!cloakerConfig.checkTor)
        return
    if (vpnApiData.security.tor)
        addError(`TOR DETECTADO | ${vpnApiData.ip}`)
}