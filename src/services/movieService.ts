import { CreateMovie } from "@/protocols/protocols";
import { movieRepository } from "@/repositories/movieRepository";

function createMovie(movie: CreateMovie){
    return movieRepository.createMovie(movie)
}

export const movieServices = {createMovie}