const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();
const password = process.env.dbpassword;
const pool =  mysql.createPool({
    host: "localhost",
    user: "root",
    password: password,
    database: "shoppingdb",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})
module.exports = pool;