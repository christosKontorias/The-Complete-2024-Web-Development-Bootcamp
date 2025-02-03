const { Pool } = require('pg');

// Configure connection to PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'bookreviews',
    password: '20140564',
    port: 5432,
});

module.exports = pool;