import dotenv from "dotenv"
import pg from "pg"
import { ConfigDatabase } from "@/protocols/protocols"

dotenv.config()

const { Pool } = pg

const configDatabase: ConfigDatabase = {
    connectionString: process.env.DATABASE_URL,
}

if(process.env.NODE_ENV === "production") configDatabase.ssl = true;

export const db = new Pool(configDatabase)