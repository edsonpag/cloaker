import { Request } from 'express';
import { addError } from '../apis/firebase_api/firebase';
import { CloakerConfig } from '../interfaces/CloakerConfig';
import { CloakerRequestBody } from '../interfaces/CloakerRequestBody';


export const checkBrowserLanguage = (req: Request, cloakerConfig: CloakerConfig) => {
    if (!cloakerConfig.checkBrowserLanguage)
        return
    const cloakerRequestBody: CloakerRequestBody = req.body
    let browserLanguages = cloakerRequestBody.browserLanguages
    if (!browserLanguages || browserLanguages.length === 0)
        return addError("Não foi possível identificar o idioma do navegador")

    browserLanguages = browserLanguages.filter((language: string) => cloakerConfig.blockedBrowserLanguages.indexOf(language) !== -1)
    if (browserLanguages.length > 0)
        return addError(`Idioma não permitido | ${browserLanguages.join(', ')}`)
}
