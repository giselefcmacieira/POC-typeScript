import { db } from "@/database/databaseConnection";
import { CreateMovie, Movie } from "@/protocols/protocols";

function createMovie(movie: CreateMovie){
    const {name, platform, status, type, comment} = movie
    let array = [name, platform, type, status]
    let query = `("name", "platform", "type", "status") VALUES ($1, $2, $3, $4)`
    if(comment){
        array.push(comment)
        query = `("name", "platform", "type", "status", "comment") VALUES ($1, $2, $3, $4, $5)`
    }
    return db.query(
        `INSERT INTO "movies" 
            ${query}`, 
            array)
}

export const movieRepository = {createMovie}