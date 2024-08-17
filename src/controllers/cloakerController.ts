import { Request, Response } from "express";
import { CloakerService } from "../services/cloakerService";
import { FirebaseService } from "../apis/firebase_api/firebaseService";

export const run = async (req: Request, res: Response) => {
    const cloakerService = new CloakerService(req)
    const cloakerResponse = await cloakerService.executeCloakerValidations()
    return res.status(200).json(cloakerResponse)
}

export const getAllCloakerErrors = async (req: Request, res: Response) => {
    const firebaseService = new FirebaseService()
    const allErrors = await firebaseService.fetchAllErrors()
    return res.status(200).json(allErrors)
}