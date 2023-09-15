import { postMovie } from "@/controllers/movieControllers";
import { validateSchema } from "@/middlewares/validateSchema";
import { Router } from "express";

const movieRouter = Router()

movieRouter.post('/movie', validateSchema, postMovie)

export default movieRouter