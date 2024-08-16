import { Request } from 'express';
import { addError } from '../apis/firebase_api/firebase';
import { CloakerConfig } from '../interfaces/CloakerConfig';
import { CloakerRequestBody } from '../interfaces/CloakerRequestBody';


export const checkReferrer = (req: Request, cloakerConfig: CloakerConfig) => {
    if (!cloakerConfig.checkReferrer)
        return
    const cloakerRequestBody: CloakerRequestBody = req.body
    let referrer = cloakerRequestBody.referrer
    if (referrer) {
        let isAllowedReferrer = false
        referrer = referrer.toLowerCase()
        cloakerConfig.allowedReferrers.forEach(ref => {
            if (referrer.includes(ref))
                isAllowedReferrer = true
        })
        if (!isAllowedReferrer)
            addError(`Referrer bloqueada | ${referrer}`)
    }
}
