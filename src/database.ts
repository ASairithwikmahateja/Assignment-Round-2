import { Pool } from 'pg'

export const pool = new Pool({
    user: "postgres",
    password: "sai",
    database: "typescriptdatabase",
    host: "localhost",
    port: 5133
});