// src/controllers/student.controller.js

// Import connection pool từ file db.js
const pool = require('../db.js');

// Lấy tất cả sinh viên
exports.getAllStudents = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM students');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving students', error: error.message });
    }
};

// Lấy sinh viên theo ID
exports.getStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query('SELECT * FROM students WHERE id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving student', error: error.message });
    }
};

// Tạo sinh viên mới
exports.createStudent = async (req, res) => {
    try {
        // Lấy dữ liệu từ body của request
        const { name, email, course } = req.body;
        if (!name || !email || !course) {
            return res.status(400).json({ message: 'Please provide name, email, and course' });
        }
        const [result] = await pool.query(
            'INSERT INTO students (name, email, course) VALUES (?, ?, ?)',
            [name, email, course]
        );
        res.status(201).json({ id: result.insertId, name, email, course });
    } catch (error) {
        res.status(500).json({ message: 'Error creating student', error: error.message });
    }
};

// Các hàm updateStudent và deleteStudent sẽ có cấu trúc tương tự...
exports.updateStudent = async (req, res) => {
    // Logic cập nhật sinh viên...
    res.send(`Update student with ID ${req.params.id}`);
};

exports.deleteStudent = async (req, res) => {
    // Logic xóa sinh viên...
    res.send(`Delete student with ID ${req.params.id}`);
};