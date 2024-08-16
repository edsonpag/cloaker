import { Request, Response } from "express";
import { CloakerService } from "../services/cloakerService";

export const run = async (req: Request, res: Response) => {
    const cloakerService = new CloakerService(req)
    const cloakerResponse = await cloakerService.executeCloakerValidations()
    return res.status(200).json(cloakerResponse)
}