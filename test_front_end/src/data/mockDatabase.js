// src/data/mockDatabase.js

// =================================================================
// 1. Dữ liệu giả cho bảng `students`
// =================================================================
export const students = [
  {
    student_id: 1,
    first_name: 'Minh Anh',
    last_name: 'Trần',
    email: 'minhanh.tran@example.com',
    date_of_birth: '2003-05-12',
  },
  {
    student_id: 2,
    first_name: 'Gia Huy',
    last_name: 'Lê',
    email: 'giahuy.le@example.com',
    date_of_birth: '2002-11-20',
  },
  {
    student_id: 3,
    first_name: 'Bảo Ngọc',
    last_name: 'Phạm',
    email: 'baongoc.pham@example.com',
    date_of_birth: '2003-01-30',
  },
  {
    student_id: 4,
    first_name: 'Đức Anh',
    last_name: 'Võ',
    email: 'ducanh.vo@example.com',
    date_of_birth: '2001-09-15',
  },
  {
    student_id: 5,
    first_name: 'Phương Thảo',
    last_name: 'Hoàng',
    email: 'phuongthao.hoang@example.com',
    date_of_birth: '2004-03-25',
  },
  {
    student_id: 6,
    first_name: 'Quốc Tuấn',
    last_name: 'Nguyễn',
    email: 'quoctuan.nguyen@example.com',
    date_of_birth: '2002-07-08',
  },
  {
    student_id: 7,
    first_name: 'Khánh Linh',
    last_name: 'Đặng',
    email: 'khanhlinh.dang@example.com',
    date_of_birth: '2003-08-19',
  },
  {
    student_id: 8,
    first_name: 'Thành Đạt',
    last_name: 'Bùi',
    email: 'thanhdat.bui@example.com',
    date_of_birth: '2002-12-01',
  },
];

// =================================================================
// 2. Dữ liệu giả cho bảng `courses`
// =================================================================
export const courses = [
  {
    course_id: 1,
    course_name: 'Lập trình Web nâng cao',
    description: 'Khóa học chuyên sâu về các framework JavaScript hiện đại.',
    issuer: 'Đại học Bách Khoa TP.HCM',
  },
  {
    course_id: 2,
    course_name: 'Quản trị cơ sở dữ liệu',
    description: 'Bao gồm thiết kế, tối ưu hóa và bảo mật CSDL.',
    issuer: 'Đại học FPT',
  },
  {
    course_id: 3,
    course_name: 'Khoa học Dữ liệu ứng dụng',
    description: 'Học về các thuật toán machine learning, phân tích dữ liệu.',
    issuer: 'Đại học Khoa học Tự nhiên',
  },
  {
    course_id: 4,
    course_name: 'An toàn thông tin mạng',
    description: 'Tập trung vào các kỹ thuật phòng chống tấn công mạng.',
    issuer: 'Học viện An ninh mạng Cybersoft',
  },
  {
    course_id: 5,
    course_name: 'Phát triển ứng dụng Blockchain',
    description: 'Giới thiệu về hợp đồng thông minh và DApps.',
    issuer: 'Hiệp hội Blockchain Việt Nam',
  },
];

// =================================================================
// 3. Dữ liệu giả cho bảng `certificates` (Bảng chính)
// =================================================================
// Chúng ta sẽ dùng một biến `let` để có thể giả lập việc "thêm" vào mảng này
export let certificates = [
  // Minh Anh có 2 chứng chỉ
  {
    certificate_id: 'cert-001',
    student_id: 1,
    course_id: 1,
    issue_date: '2025-06-15',
    expiry_date: null,
    blockchain_token: '0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d',
  },
  {
    certificate_id: 'cert-002',
    student_id: 1,
    course_id: 3,
    issue_date: '2025-09-01',
    expiry_date: '2027-09-01',
    blockchain_token: '0x2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e',
  },

  // Gia Huy có 1 chứng chỉ
  {
    certificate_id: 'cert-003',
    student_id: 2,
    course_id: 2,
    issue_date: '2025-01-20',
    expiry_date: null,
    blockchain_token: '0x3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f',
  },

  // Bảo Ngọc có chứng chỉ Blockchain
  {
    certificate_id: 'cert-004',
    student_id: 3,
    course_id: 5,
    issue_date: '2025-10-05',
    expiry_date: null,
    blockchain_token: '0x4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a',
  },

  // Đức Anh có chứng chỉ An toàn mạng
  {
    certificate_id: 'cert-005',
    student_id: 4,
    course_id: 4,
    issue_date: '2024-11-30',
    expiry_date: '2026-11-30',
    blockchain_token: '0x5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b',
  },

  // Phương Thảo chưa có token (Pending)
  {
    certificate_id: 'cert-006',
    student_id: 5,
    course_id: 1,
    issue_date: '2025-06-15',
    expiry_date: null,
    blockchain_token: null, // <-- Quan trọng: Dùng null để thể hiện "Pending"
  },

  // Quốc Tuấn có chứng chỉ Database
  {
    certificate_g_id: 'cert-007',
    student_id: 6,
    course_id: 2,
    issue_date: '2025-07-22',
    expiry_date: null,
    blockchain_token: '0x6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c',
  },

  // Khánh Linh có 2 chứng chỉ, 1 chưa có token
  {
    certificate_id: 'cert-008',
    student_id: 7,
    course_id: 3,
    issue_date: '2025-09-01',
    expiry_date: '2027-09-01',
    blockchain_token: '0x7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d',
  },
  {
    certificate_id: 'cert-009',
    student_id: 7,
    course_id: 5,
    issue_date: '2025-10-05',
    expiry_date: null,
    blockchain_token: null, // <-- Quan trọng: Dùng null để thể hiện "Pending"
  },

  // Thành Đạt có 1 chứng chỉ
  {
    certificate_id: 'cert-010',
    student_id: 8,
    course_id: 4,
    issue_date: '2025-04-10',
    expiry_date: '2027-04-10',
    blockchain_token: '0x8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e',
  },
];

// =================================================================
// 4. Các hàm giả lập API (Fake API Functions)
// =================================================================
// Bạn có thể import các hàm này vào component để giả lập việc gọi API

/**
 * Giả lập API lấy tất cả chứng chỉ với thông tin chi tiết
 * (Đây là hàm phức tạp nhất, nó JOIN 3 bảng lại cho bạn)
 */
export const getCertificatesWithDetails = () => {
  return certificates.map((cert) => {
    // Tìm sinh viên tương ứng
    const student = students.find((s) => s.student_id === cert.student_id);
    // Tìm khóa học tương ứng
    const course = courses.find((c) => c.course_id === cert.course_id);

    // Kết hợp thông tin
    return {
      ...cert,
      student_name: `${student.first_name} ${student.last_name}`,
      student_email: student.email,
      course_name: course.course_name,
      issuer: course.issuer,
      status: cert.blockchain_token ? 'Verified' : 'Pending', // <-- Logic suy luận
    };
  });
};

/**
 * Giả lập API tra cứu 1 chứng chỉ
 */
export const findCertificateByToken = (token) => {
  const allDetails = getCertificatesWithDetails();
  return allDetails.find((cert) => cert.blockchain_token === token);
};

/**
 * Giả lập API thêm 1 chứng chỉ mới
 */
export const addCertificate = (newCertData) => {
  // newCertData là object có dạng { student_id, course_id, issue_date, expiry_date }

  const newId = `cert-${Math.floor(Math.random() * 1000) + 100}`; // Tạo ID ngẫu nhiên
  const newToken = `0x${Math.random().toString(16).slice(2, 34)}`; // Tạo token ngẫu nhiên

  const newCertificate = {
    ...newCertData,
    certificate_id: newId,
    blockchain_token: newToken,
  };

  // Thêm vào "database"
  certificates.push(newCertificate);
  
  // Trả về chứng chỉ mới với đầy đủ thông tin chi tiết
  const student = students.find((s) => s.student_id === newCertificate.student_id);
  const course = courses.find((c) => c.course_id === newCertificate.course_id);
  
  return {
    ...newCertificate,
    student_name: `${student.first_name} ${student.last_name}`,
    student_email: student.email,
    course_name: course.course_name,
    issuer: course.issuer,
    status: 'Verified',
  };
};