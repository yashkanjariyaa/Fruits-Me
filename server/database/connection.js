const mysql = require("mysql2/promise");

const pool =  mysql.createPool({
    host: "localhost",
    user: "root",
    password: "yash1311",
    database: "shoppingdb",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})
module.exports = pool;