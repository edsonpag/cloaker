import * as fs from 'fs'
import * as path from 'path'
import { CloakerConfig } from '../interfaces/CloakerConfig'
import { Request } from 'express'

const loadCloakerConfigs = () => {
    const cloakersConfigDir = path.join(__dirname, './cloakers')
    const allConfigs: { [id: string]: CloakerConfig } = {}
    fs.readdirSync(cloakersConfigDir).forEach(file => {
        if (file.endsWith('.js')) {
            const cloakerId = file.split('.')[0]
            const cloakerConfig = require(path.join(cloakersConfigDir, file)).default
            allConfigs[cloakerId] = cloakerConfig
        }
    })
    return allConfigs
}

export const getCloakerConfig = (req: Request): CloakerConfig => {
    const allConfigs = loadCloakerConfigs()
    const cloakerId = req.body['d']
    return allConfigs[cloakerId]
}