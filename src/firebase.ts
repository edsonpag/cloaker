import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'


initializeApp({
    credential: cert({
        clientEmail: "firebase-adminsdk-9nbnv@cloaker-log.iam.gserviceaccount.com",
        privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCxLqxoHSS/tu7k\ns4eUvGCDVwxCQ5wIVWr8A+PFBlQrtSfoFqHzBxN+pxtW2xTCdqn/FLZCd//8KWym\nHmQlbUUOTkkDt+j6HAL1elqGeP1lKuxhTstAeKmfLT3kceDV/PqFjpHnSGhIUNaD\n/0LqHf+6Mu1cMNaTMNa9uikHBYbr56IWXkJ4D3jNGDoyvJ9ZpkKAyMo0P20YiTXj\n2rsjsCSohr5m4lZnlrCl382Ze99TlsGxzhMY637WIj0Ve8J8+bKMHpIFjjmHkUpT\nvZD3PMJVK6qVdUAWAN4Oz6AdiC/DD2medaV7dJSQaeaMBYK5bRWWtrpDH9m4PdlV\npUDDHPebAgMBAAECggEAK0bqro17xeYBSNQ/CAnRCxOOd3r7GCAA/yhWEHBAy+I2\nKp6olOtEDDn12Auv8OW6FQdykx6rZGSb2KFwtaGQbfOaKvHXUovX/yyRAup3fifz\nT7tGsusmBy6uQOe90pa1fDy8D4Fkk1FHbDtDlVqZdVnuFwgIyS/zK6lWTxQ/BcyI\nKpDB7CQfNfMHbBvJfmiyJVBmj4MAaxML+eL5y1vWRmGoQ+IzgeGkVTIKHUMFjqir\n8ie5o844i08RuCb/DfVGO1wR1pjo5XIuls5HZOtcAHnwLb7IhDHCxOGXDucFki2q\nW/SkZOWZNCjQ6HMXq+iefCV49o7luDA9FzVP0JFPZQKBgQDnPFuI3msZFPmuyqJP\nWy8vVHqP1Ojzo++q0CGcUJFkBMg1b8yraKL7C73wspytwBnfO9jbnVz/hHhFAoM9\nyOb5GwaQAsMxdkzcndNSsVlGyqwsABFR71/4lBO/lxy3BS3SgsdzwfWILFjVLGsq\n9I2mzkw04B25opHDfO8TWKv9vwKBgQDEKF38hb0b0mg7aPJxCAibFc+2nJBojNhQ\nI0K3jkUyQ0tpH5oo2wfK5AUKGY7Tg2llZOg54YsFeL1kOEksWoKGYjEjDHsHdDxT\n6jZtp9awmUi3uMpVhtvksYredlBnnlkkQYrs2CFKbf9pO2VXfTjCtRDbeVHwgW4s\nhEnsfPd1JQKBgH9LfOB2AONH5sPQjVW+TtVxXh88CBnID7Iq7bXNrJww/b5dE4Dx\nE3e8WQ3eZd5IuHVpztHnaUDIviTPY0xqAqzzscMpoibihyGUSLdnJkyQWgPG7cH7\nUwvXCKAaIham5TjUAdS5297g+u4vi7eT9T70poMdNX/x/OhvKHWwBM6lAoGAS7vm\nJbQhAlfnRGDNkhRu9imiq7ehDayra61heeslDjXrLKg15eZDCPOmenLJsSJAlBQ0\nkPxip3cpcENHBSfg0y+gFw8fhQ48qI15/DZb7o0QBVcET6ckyRQ/MIrvmkIJ2rSv\nhaggmlMD1MZI51GCk7JC0unxV/Ew72EYBYVuKT0CgYBWMy9RO+gAgJk473L04hY5\nLGdzibGB05Vs5+WNube28n/ZqAZlnQdIN/L5kh92ACwHag2rmCeUWKkK+VzZZsNS\nzX/utagffPx33oSKAkDnB/jtd1fCCEMd9ZPYysc6yrCNxs5CbClnb82K3FiuI9SY\nqS9uBbJ8ALBp/Khdb5PM3A==\n-----END PRIVATE KEY-----\n",
        projectId: "cloaker-log"
    })
})

export const db = getFirestore()

