import { Request } from "express";
import requestIp from "request-ip"
import { VPNResponse } from "../interfaces/VPNResponse";
import { FirebaseService } from "../../firebase_api/firebaseService";


export const requestApiData = async (req: Request, firebaseService: FirebaseService): Promise<VPNResponse | null> => {
    const ip = requestIp.getClientIp(req)
    if (!ip) {
        firebaseService.addError(`IP não encontrado`)
        return null
    }
    try {
        const response = await fetch(`https://vpnapi.io/api/${ip}?key=${process.env.VPN_API_KEY}`)
        const data: VPNResponse = await response.json()
        return data
    } catch (error) {
        firebaseService.addError(`Erro ao buscar dados na API da VPN | ${error}`)
        return null
    }
}