import { NextFunction, Request, Response } from "express";


export default function errorHandler(error: {type: string, message: string}, req: Request, res: Response, next: NextFunction){
    if (error.type === "invalidBody") {
        return res.status(422).send(error.message);
    }
    console.log(error)
    res.status(500).send("Foi mal, deu alguma coisa errada com o servidor 😢");
}