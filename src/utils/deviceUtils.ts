import { Request } from 'express';
import { addError } from '../apis/firebase_api/firebase';
import { CloakerConfig } from '../interfaces/CloakerConfig';


export const checkDesktop = (req: Request, cloakerConfig: CloakerConfig) => {
    if (!cloakerConfig.checkDesktop)
        return
    const userAgent = req.useragent
    const isDesktop = userAgent?.isDesktop
    if (isDesktop) 
        addError(`Dispositivo Desktop não permitido | ${userAgent?.platform} | ${userAgent?.os}`)
}

export const checkBot = (req: Request, cloakerConfig: CloakerConfig) => {
    if (!cloakerConfig.checkBot)
        return
    const userAgent = req.useragent
    const isBot = userAgent?.isBot
    if (isBot) 
        addError(`Bot Detectado | ${userAgent?.platform} | ${userAgent?.os}`)
}