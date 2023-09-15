import { db } from "@/database/databaseConnection";
import { CreateMovie, Movie, ReadMovie, UpdateMovie } from "@/protocols/protocols";

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

async function selectById(id: number){
    const movie = await db.query(`SELECT "id", "status" FROM "movies" WHERE id = $1`, [id])
    return {
        qtd: movie.rowCount,
        inf: movie.rows[0]
    }
}

function updateMovie(movie: UpdateMovie){
    const {id, status, comment} = movie
    return db.query(
        `UPDATE "movies" SET ${comment ? `"status" = $1, "comment" = $2`: `"status" = $1`} 
            WHERE id = ${comment ? '$3' : '$2'}`, 
        comment ? [status, comment, id] : [status, id])
}

function selectMovies(movies: ReadMovie){
    const{type, platform} = movies
    let query = ''
    let array = []
    if(type){
        array.push(type)
        query += 'WHERE "type" = $1'
        if(platform){
            array.push(platform)
            query += ' AND "platform" = $2'
        }
    }else if(platform){
        array.push(platform)
        query += 'WHERE "platform" = $1'
    }
    return db.query(
        `SELECT * FROM "movies" 
            ${query}`, 
        array
    )
}

export const movieRepository = {createMovie, updateMovie, selectById}