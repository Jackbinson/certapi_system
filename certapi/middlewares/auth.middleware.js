// file: middlewares/auth.middleware.js

const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
    let token;

    // Kiểm tra xem header 'Authorization' có tồn tại và bắt đầu bằng 'Bearer' không
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Lấy token từ header (loại bỏ chữ 'Bearer ')
            token = req.headers.authorization.split(' ')[1];

            // Xác thực token với secret key của bạn (lưu trong file .env)
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Gắn thông tin người dùng đã được giải mã vào đối tượng request
            // để các controller sau có thể sử dụng
            req.user = decoded; 

            // Cho phép request đi tiếp đến controller
            next();
        } catch (error) {
            console.error(error);
            res.status(401).json({ message: 'Not authorized, token failed' });
        }
    }

    if (!token) {
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};

module.exports = { protect };