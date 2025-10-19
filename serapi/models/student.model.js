// file: models/student.model.js

const pool = require('../db.js'); // Import connection pool

class Student {
    // Phương thức tĩnh để lấy tất cả sinh viên
    static async findAll() {
        const [rows] = await pool.query('SELECT * FROM students');
        return rows;
    }

    // Phương thức tĩnh để tìm một sinh viên theo ID
    static async findById(id) {
        const [rows] = await pool.query('SELECT * FROM students WHERE id = ?', [id]);
        // Trả về đối tượng sinh viên đầu tiên tìm thấy, hoặc null nếu không có
        return rows[0] || null;
    }

    // Phương thức tĩnh để tạo một sinh viên mới
    static async create(newStudent) {
        const { name, email, course } = newStudent;
        const [result] = await pool.query(
            'INSERT INTO students (name, email, course) VALUES (?, ?, ?)',
            [name, email, course]
        );
        // Trả về ID của bản ghi mới được tạo
        return { id: result.insertId, ...newStudent };
    }

    // Phương thức tĩnh để cập nhật thông tin sinh viên
    static async updateById(id, studentData) {
        const { name, email, course } = studentData;
        const [result] = await pool.query(
            'UPDATE students SET name = ?, email = ?, course = ? WHERE id = ?',
            [name, email, course, id]
        );
        // Trả về số dòng bị ảnh hưởng (0 nếu không tìm thấy ID, 1 nếu cập nhật thành công)
        return result.affectedRows;
    }

    // Phương thức tĩnh để xóa một sinh viên
    static async deleteById(id) {
        const [result] = await pool.query('DELETE FROM students WHERE id = ?', [id]);
        // Trả về số dòng bị ảnh hưởng
        return result.affectedRows;
    }
}

module.exports = Student;