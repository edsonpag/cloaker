export interface VPNResponse {
    ip: string,
    security: {
        vpn: boolean,
        proxy: boolean,
        tor: boolean,
        relay: boolean
    },
    location: {
        country_code: string,
    }
}