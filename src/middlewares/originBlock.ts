import { NextFunction, Request, Response } from "express";

export function originBlock(req: Request, res: Response, next: NextFunction) {
    const allowedOrigins = ['https://buena-salud.online']
    const origin = req.headers.origin
    if (origin && allowedOrigins.includes(origin))
        next()
    else
        return res.status(404).send('Erro desconhecido')
}