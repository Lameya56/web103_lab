import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config({path: '../.env'});
const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    ssl:{ 
        rejectUnauthorized: false
    },
    connectionString: process.env.CONNECTION_STRING,
}
// const pool = new pg.Pool(config);
// export default pool; damn dis one doesn't work 
export const pool = new pg.Pool(config)