import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { VPNResponse } from '../vpn_api/interfaces/VPNResponse'

const errors: string[] = []

export const getErrors = (): string[] => {
    return errors
}

export const addError = (errorMessage: string) => {
    errors.push(errorMessage)
}

export const persistErrors = (vpnApiData: VPNResponse | null) => {
    if (errors.length > 0) {
        const errorsRef = db.collection('errors')
        let errorsObj: any = {}
        for (let i = 0; i < errors.length; i++) {
            let iString = i.toString()
            errorsObj[iString] = errors[i]
        }
        errorsObj['date'] = new Date()
        if (vpnApiData !== null) {
            errorsObj['ip'] = vpnApiData.ip
            errorsObj['country_code'] = vpnApiData.location.country_code
        }
        errorsRef.add(errorsObj)
    }
}

initializeApp({
    credential: cert({
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
        projectId: process.env.FIREBASE_PROJECT_ID
    })
})

export const db = getFirestore()