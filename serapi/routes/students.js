// routes/students.js

const express = require('express');
const router = express.Router();
const pool = require('../db'); // Chúng ta sẽ tạo file db.js ở bước tiếp theo

// =================================================================
// 🚀 LẤY TẤT CẢ SINH VIÊN (GET ALL)
// =================================================================
router.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM students');
        res.json(rows);
    } catch (error) {
        console.error('Lỗi khi truy vấn sinh viên:', error);
        res.status(500).json({ error: 'Lỗi server khi lấy danh sách sinh viên.' });
    }
});

// =================================================================
// ➕ THÊM SINH VIÊN MỚI (CREATE)
// =================================================================
router.post('/', async (req, res) => {
    try {
        const { first_name, last_name, email, date_of_birth } = req.body;
        if (!first_name || !last_name || !email || !date_of_birth) {
            return res.status(400).json({ error: 'Vui lòng cung cấp đầy đủ thông tin.' });
        }

        const [result] = await pool.query(
            'INSERT INTO students (first_name, last_name, email, date_of_birth) VALUES (?, ?, ?, ?)',
            [first_name, last_name, email, date_of_birth]
        );
        
        res.status(201).json({
            student_id: result.insertId,
            message: 'Tạo sinh viên thành công!'
        });

    } catch (error) {
        console.error('Lỗi khi thêm sinh viên:', error);
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ error: 'Email đã tồn tại.' });
        }
        res.status(500).json({ error: 'Lỗi server khi thêm sinh viên.' });
    }
});


// =================================================================
// 📝 CHỈNH SỬA THÔNG TIN SINH VIÊN (UPDATE)
// =================================================================
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { first_name, last_name, email, date_of_birth } = req.body;

        if (!first_name || !last_name || !email || !date_of_birth) {
            return res.status(400).json({ error: 'Vui lòng cung cấp đầy đủ thông tin.' });
        }

        const [result] = await pool.query(
            'UPDATE students SET first_name = ?, last_name = ?, email = ?, date_of_birth = ? WHERE student_id = ?',
            [first_name, last_name, email, date_of_birth, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: `Không tìm thấy sinh viên với ID = ${id}.` });
        }

        res.json({ message: `Cập nhật sinh viên ID = ${id} thành công!` });

    } catch (error) {
        console.error('Lỗi khi cập nhật sinh viên:', error);
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ error: 'Email đã tồn tại.' });
        }
        res.status(500).json({ error: 'Lỗi server khi cập nhật sinh viên.' });
    }
});


// =================================================================
// 🗑️ XÓA SINH VIÊN (DELETE)
// =================================================================
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query('DELETE FROM students WHERE student_id = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: `Không tìm thấy sinh viên với ID = ${id}.` });
        }

        res.status(204).send();

    } catch (error) {
        console.error('Lỗi khi xóa sinh viên:', error);
        res.status(500).json({ error: 'Lỗi server khi xóa sinh viên.' });
    }
});

module.exports = router; // Xuất router để app.js có thể sử dụng