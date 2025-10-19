// app.js

// --- 1. Import các thư viện cần thiết ---
const express = require('express');
const helmet = require('helmet');      // Thư viện bảo mật
require('dotenv').config();           // Nạp biến môi trường từ file .env
const pool = require('./db');         // <<<--- IMPORT POOL TỪ FILE db.js

// --- 2. Khởi tạo ứng dụng Express ---
const app = express();
const port = process.env.PORT || 3000;

// --- 3. Cấu hình Middleware ---
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      connectSrc: ["'self'", "ws:"], 
    },
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- 4. Định nghĩa các Routes (API Endpoints) ---

// Route chính để kiểm tra API
app.get('/', (req, res) => {
    res.json({ message: 'Chào mừng đến với API Quản lý Chứng chỉ Sinh viên!' });
});

// --- API cho Sinh viên (Students) ---

// Lấy TẤT CẢ sinh viên
app.get('/students', async (req, res) => {
    try {
        const [results] = await pool.query('SELECT * FROM students');
        res.json(results);
    } catch (error) {
        console.error('Lỗi truy vấn database:', error);
        res.status(500).json({ error: 'Lỗi server khi lấy danh sách sinh viên' });
    }
});

// Lấy MỘT sinh viên theo ID
app.get('/students/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const [results] = await pool.query('SELECT * FROM students WHERE student_id = ?', [id]);
        
        if (results.length === 0) {
            return res.status(404).json({ error: `Không tìm thấy sinh viên với ID = ${id}` });
        }
        res.json(results[0]);
    } catch (error) {
        console.error('Lỗi truy vấn database:', error);
        res.status(500).json({ error: 'Lỗi server khi lấy thông tin sinh viên' });
    }
});

// TẠO MỚI một sinh viên
app.post('/students', async (req, res) => {
    try {
        const { first_name, last_name, email, date_of_birth } = req.body;
        if (!first_name || !last_name || !email) {
            return res.status(400).json({ error: 'Vui lòng cung cấp đủ thông tin: first_name, last_name, email' });
        }
        
        const sql = 'INSERT INTO students (first_name, last_name, email, date_of_birth) VALUES (?, ?, ?, ?)';
        const [result] = await pool.query(sql, [first_name, last_name, email, date_of_birth]);
        
        res.status(201).json({
            message: 'Tạo sinh viên thành công!',
            student_id: result.insertId
        });
    } catch (error) {
        console.error('Lỗi khi tạo sinh viên:', error);
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ error: 'Email đã tồn tại trong hệ thống' });
        }
        res.status(500).json({ error: 'Lỗi server khi tạo sinh viên' });
    }
});

// CẬP NHẬT thông tin một sinh viên
app.put('/students/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { first_name, last_name, email, date_of_birth } = req.body;

        if (!first_name || !last_name || !email) {
            return res.status(400).json({ error: 'Vui lòng cung cấp đủ thông tin: first_name, last_name, email' });
        }
        
        const sql = 'UPDATE students SET first_name = ?, last_name = ?, email = ?, date_of_birth = ? WHERE student_id = ?';
        const [result] = await pool.query(sql, [first_name, last_name, email, date_of_birth, id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: `Không tìm thấy sinh viên với ID = ${id} để cập nhật` });
        }

        res.json({ message: `Cập nhật sinh viên ID = ${id} thành công!` });
    } catch (error) {
        console.error('Lỗi khi cập nhật sinh viên:', error);
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ error: 'Email đã tồn tại trong hệ thống' });
        }
        res.status(500).json({ error: 'Lỗi server khi cập nhật sinh viên' });
    }
});

// XÓA một sinh viên
app.delete('/students/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query('DELETE FROM students WHERE student_id = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: `Không tìm thấy sinh viên với ID = ${id} để xóa` });
        }

        res.json({ message: `Đã xóa thành công sinh viên ID = ${id}` });
    } catch (error) {
        console.error('Lỗi khi xóa sinh viên:', error);
        res.status(500).json({ error: 'Lỗi server khi xóa sinh viên' });
    }
});

// --- 5. Khởi động Server ---
const startServer = async () => {
    try {
        await pool.query('SELECT 1');
        console.log('✅ Kết nối database thành công!');
        
        app.listen(port, () => {
            console.log(`🚀 Server đang lắng nghe tại http://localhost:${port}`);
        });
    } catch (error) {
        console.error('🔴 Không thể kết nối tới database. Server không thể khởi động.', error);
        process.exit(1);
    }
};

startServer();