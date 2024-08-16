import { Request } from 'express';
import { addError } from '../apis/firebase_api/firebase';
import { CloakerConfig } from '../interfaces/CloakerConfig';
import { CloakerRequestBody } from '../interfaces/CloakerRequestBody';


export const checkSecretCode = (req: Request, cloakerConfig: CloakerConfig) => {
    if (!cloakerConfig.checkSecretCode)
        return
    const cloakerRequestBody: CloakerRequestBody = req.body
    const url = cloakerRequestBody.url
    if (!url)
        return addError('URL Inexistente para validação do Secret Code')
    const decodedUrl = decodeURIComponent(url)
    if (!decodedUrl.includes(cloakerConfig.secretCode))
        addError(`Secret Code não informado na URL | ${decodedUrl}`)
}