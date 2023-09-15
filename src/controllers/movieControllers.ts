import { movieServices } from "@/services/movieService";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function postMovie(req: Request, res: Response){
    await movieServices.createMovie(req.body)
    res.status(httpStatus.CREATED).send({message: 'Movie successfully created!'})
}