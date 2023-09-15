import { CreateMovie, UpdateMovie } from "@/protocols/protocols";
import { movieServices } from "@/services/movieService";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function postMovie(req: Request, res: Response){
    await movieServices.createMovie(req.body as CreateMovie)
    res.status(httpStatus.CREATED).send({message: 'Movie successfully created!'})
}

export async function putMovie(req: Request, res: Response){
    await movieServices.updateMovie(req.body as UpdateMovie)
    res.status(httpStatus.OK).send({message: 'Movie updated successufully!'})
}