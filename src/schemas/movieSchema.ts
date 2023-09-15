import { CreateMovie, Movie } from "@/protocols/protocols";
import Joi from "joi";

export const movieSchema = Joi.object<CreateMovie>({
    name: Joi.string().required(),
    platform: Joi.string().required(),
    type: Joi.string().required(),
    status: Joi.boolean().required(),
    comment: Joi.string()
})