import { createPool } from "mysql2/promise";

// Equivalent to create connection
export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'companydb'
})

