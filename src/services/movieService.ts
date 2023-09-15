import { conflictError } from "@/errors/conflict";
import { CreateMovie, ReadMovie, Resp, UpdateMovie } from "@/protocols/protocols";
import { movieRepository } from "@/repositories/movieRepository";

function createMovie(movie: CreateMovie){
    return movieRepository.createMovie(movie)
}

async function updateMovie(movie: UpdateMovie){
    const existingMovie: Resp = await movieRepository.selectById(movie.id)
    if(existingMovie.qtd === 0){
        throw conflictError('This movie do not exist!')
    }
    return movieRepository.updateMovie(movie)
}

function readMovies(movie: ReadMovie){
    return movieRepository.selectMovies(movie)
}

export const movieServices = {createMovie, updateMovie, readMovies}