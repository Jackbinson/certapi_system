// db.js

// --- 1. Import các thư viện cần thiết ---
// Sửa 'mysql2' thành 'mysql2/promise' để có thể dùng async/await trực tiếp
const mysql = require('mysql2/promise'); 
require('dotenv').config();

// --- 2. Cấu hình kết nối Database ---
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

// --- 3. Tạo và xuất ra connection pool ---
const pool = mysql.createPool(dbConfig);

// Xuất (export) pool để các file khác trong dự án có thể sử dụng
module.exports = pool;