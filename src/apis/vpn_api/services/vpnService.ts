import { Request } from "express";
import requestIp from "request-ip"
import { VPNResponse } from "../interfaces/VPNResponse";


export const requestApiData = async (req: Request): Promise<VPNResponse | null> => {
    const ip = requestIp.getClientIp(req)
    if (!ip)
        return null
    try {
        const response = await fetch(`https://vpnapi.io/api/${ip}?key=${process.env.VPN_API_KEY}`)
        const data: VPNResponse = await response.json()
        return data
    } catch (error) {
        return null
    }
}