import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

initializeApp({
    credential: cert({
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
        projectId: process.env.FIREBASE_PROJECT_ID
    })
})

export const db = getFirestore()