import { Request } from 'express';
import { addError } from '../apis/firebase_api/firebase';
import { CloakerConfig } from '../interfaces/CloakerConfig';
import { CloakerRequestBody } from '../interfaces/CloakerRequestBody';


export const checkSiteSourceName = (req: Request, cloakerConfig: CloakerConfig) => {
    if (!cloakerConfig.checkSiteSourceName)
        return
    const cloakerRequestBody: CloakerRequestBody = req.body
    const url = cloakerRequestBody.url
    if (!url)
        return addError('URL Inexistente para Validação do Site Source Name')
    const decodedUrl = decodeURIComponent(url)
    const urlParts = decodedUrl.split("|")
    if (urlParts.length >= 5) {
        let isAllowedSiteSourceName = false
        const siteSourceName = urlParts[4]
        cloakerConfig.allowedSitesSourceNames.forEach(assn => {
            if (assn.includes(siteSourceName))
                isAllowedSiteSourceName = true
        })
        if (!isAllowedSiteSourceName)
            addError(`Site Source Name Inválido | ${siteSourceName}`)
        return
    }
    addError("urlParts length menor que 5, não foi passado o site source name")
}
