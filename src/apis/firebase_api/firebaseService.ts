import { db } from './firebaseConnection'
import { VPNResponse } from '../vpn_api/interfaces/VPNResponse'

export class FirebaseService {
    private errors: string[] = []

    getErrors() {
        return this.errors
    }

    addError = (errorMessage: string) => {
        this.errors.push(errorMessage)
    }

    persistErrors = (vpnApiData: VPNResponse | null) => {
        if (this.errors.length > 0) {
            const errorsRef = db.collection('errors')
            let errorsObj: any = {}
            for (let i = 0; i < this.errors.length; i++) {
                let iString = i.toString()
                errorsObj[iString] = this.errors[i]
            }
            errorsObj['date'] = new Date()
            if (vpnApiData !== null) {
                errorsObj['ip'] = vpnApiData.ip
                errorsObj['country_code'] = vpnApiData.location.country_code
            }
            errorsRef.add(errorsObj)
        }
    }
}
