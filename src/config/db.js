// db.js
import { configDotenv } from 'dotenv';
import pgPool from 'pg';

const { Pool } = pgPool;

configDotenv();

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'twitter',
    password: 'postgres',
    port: 5432,
});

export default pool;


