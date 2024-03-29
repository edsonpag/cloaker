import { NextFunction, Request, Response } from "express";

export function originBlock(req: Request, res: Response, next: NextFunction) {
    const allowedOrigins = ['https://buenasalud.fun/es-2/']
    const origin = req.headers.origin
    console.log(origin)
    if (origin && allowedOrigins.includes(origin))
        console.log(origin)
    else
        return res.status(404).send('Erro desconhecido');
    next();
}