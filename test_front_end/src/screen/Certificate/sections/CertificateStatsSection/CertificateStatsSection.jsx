import React, { useState } from 'react';

// Import các component của MUI
import {
  Table, TableHead, TableBody, TableRow, TableCell, TableContainer,
  Paper, Avatar, Button, Pagination, Box, Typography, Chip
} from '@mui/material';

// Import màu "blue" để làm màu nền xen kẽ
import { blue } from '@mui/material/colors';

const certificatesData = [
    { id: 1, issueDate: '13/01', student: 'Minh Anh', studentImage: 'https://c.animaapp.com/iSjItHgp/img/image@2x.png', email: 'minhanh@gmail.com', courseName: 'Lập trình web nâng cao', status: 'Verified' },
    { id: 2, issueDate: '13/01', student: 'Gia Huy', studentImage: 'https://c.animaapp.com/iSjItHgp/img/image-1@2x.png', email: 'giahuy@gmail.com', courseName: 'Khoa học dữ liệu', status: 'Verified' },
    { id: 3, issueDate: '13/01', student: 'Bảo Ngọc', studentImage: 'https://c.animaapp.com/iSjItHgp/img/image-2@2x.png', email: 'baongoc@gmail.com', courseName: 'Quản trị cơ sở dữ liệu', status: 'Verified' },
    { id: 4, issueDate: '13/01', student: 'Đức Anh', studentImage: 'https://c.animaapp.com/iSjItHgp/img/image-3@2x.png', email: 'ducanh@gmail.com', courseName: 'Lập trình Web nâng cao', status: 'Pending' },
    { id: 5, issueDate: '13/01', student: 'Khánh Linh', studentImage: 'https://c.animaapp.com/iSjItHgp/img/image-4@2x.png', email: 'khanhlinh@gmail.com', courseName: 'Lập trình Web nâng cao', status: 'Verified' },
    { id: 6, issueDate: '13/01', student: 'Thành Đạt', studentImage: 'https://c.animaapp.com/iSjItHgp/img/image-5@2x.png', email: 'thanhdat@gmail.com', courseName: 'Khoa học dữ liệu', status: 'Verified' },
];

export const CertificateStatsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <Paper elevation={1} sx={{ mt: 3, borderRadius: '8px', overflow: 'hidden' }}>
      <TableContainer>
        <Table hoverable="true" sx={{ minWidth: 650 }} aria-label="certificates table">
          
          {/* 👇 SỬA LỖI WHITESPACE: Viết liền <TableHead> và <TableRow> */}
          <TableHead sx={{ backgroundColor: 'grey.200' }}><TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Issue Date</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Student</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Course Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="center">Status</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="center">Actions</TableCell>
            </TableRow></TableHead>
          {/* Hết phần sửa lỗi */}

          <TableBody>
            {certificatesData.map((cert) => (
              <TableRow
                key={cert.id}
                hover
                sx={{
                  '&:nth-of-type(odd)': { backgroundColor: blue[50] },
                  '&:nth-of-type(even)': { backgroundColor: blue[100] },
                  '&:last-child td, &:last-child th': { border: 0 },
                }}
              >
                {/* ... (Các TableCell giữ nguyên như cũ) ... */}
                <TableCell sx={{ fontWeight: 'medium', color: 'text.primary' }}>
                  {cert.issueDate}
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Avatar src={cert.studentImage} alt={`${cert.student}'s profile`} />
                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                      {cert.student}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{cert.email}</TableCell>
                <TableCell>{cert.courseName}</TableCell>
                <TableCell align="center">
                  <Chip
                    label={cert.status}
                    color={cert.status === 'Verified' ? 'success' : 'warning'}
                    size="small"
                  />
                </TableCell>
                <TableCell align="center">
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                    <Button
                      size="small"
                      variant="contained"
                      sx={{
                        backgroundColor: '#13a70e',
                        '&:hover': {
                          backgroundColor: '#11bd0b',
                        },
                      }}
                    >
                      Update
                    </Button>
                    <Button
                      size="small"
                      variant="contained"
                      color="error"
                    >
                      Remove
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 2,
          borderTop: 1,
          borderColor: 'grey.200'
        }}
      >
        <Pagination
          count={100} 
          page={currentPage} 
          onChange={onPageChange}
          color="primary"
        />
      </Box>
    </Paper>
  );
};

// export default CertificateStatsSection;