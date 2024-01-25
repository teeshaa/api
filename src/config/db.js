import pgPool from 'pg';

const { Pool } = pgPool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'twitter',
    password: 'postgres',
    port: 5432,
})

export default pool

