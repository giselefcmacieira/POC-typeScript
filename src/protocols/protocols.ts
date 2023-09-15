export type ConfigDatabase = {
    connectionString: string;
    ssl?: boolean
}

export type Movie = {
    id: number;
    name: string;
    platform: string;
    type: string;
    status: boolean;
    comment?: string;
}

export type CreateMovie = Omit<Movie, "id">