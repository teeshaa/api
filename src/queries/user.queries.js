export const insertUserQuery  = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *';

export const userExistsQuery = 'SELECT * FROM users WHERE username = $1 OR email = $2';