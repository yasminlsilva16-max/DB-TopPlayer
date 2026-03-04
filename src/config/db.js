import mysql from "mysql2/promise";
import dotenv from "dotenv";

export const conexao = mysql.createPool({
    host:process.env.DB_HOST,
    password:process.env.DB_USER,
    host:process.env.DB_PASSWORD,
    host:process.env.DB_NAME,
    port: process.env.DB_PORT,
    wairForConnections: true,
    connectionLimit:10,
    queueLimit:0
    
})