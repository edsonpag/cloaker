import { Request, Response } from "express";
import { executeCloakerValidations } from "../services/cloakerService";

export const run = async (req: Request, res: Response) => {
    const cloakerResponse = await executeCloakerValidations(req)
    return res.status(200).json(cloakerResponse)
}