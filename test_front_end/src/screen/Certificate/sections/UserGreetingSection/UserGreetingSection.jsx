import React, { useState, useEffect } from 'react';
// Import các component của MUI
import { Paper, Box, Typography, Breadcrumbs, Link } from '@mui/material';
// Import icon Home của MUI (thay thế HiHome)
import HomeIcon from '@mui/icons-material/Home';

export const UserGreetingSection = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000 * 60); // Update every minute

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString(undefined, { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const formattedTime = currentDateTime.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    // Dùng Paper thay cho <section> (đã có nền trắng, bo góc, đổ bóng)
    <Paper
      elevation={1}
      // Dùng 'sx' prop thay cho className
      sx={{
        width: '100%', // Tương đương w-full
        p: 2, // 16px (tương đương p-4)
        mt: 3, // 24px (tương đương mt-6)
        display: 'flex', // flex
        justifyContent: 'space-between', // justify-between
        alignItems: 'center', // items-center
        boxSizing: 'border-box' // Đảm bảo padding không làm tràn
      }}
    >
      {/* Khối bên trái (Tiêu đề và Breadcrumb) */}
      <Box>
        {/* Tiêu đề (tương đương h1 text-2xl font-bold) */}
        <Typography 
          variant="h5" 
          component="h1" 
          sx={{ fontWeight: 'bold', color: 'text.primary' }}
        >
          Certificate Management
        </Typography>
        
        {/* Breadcrumb của MUI */}
        <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 0.5 }}>
          {/* Mục Dashboard (có icon) */}
          <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center' }}
            color="inherit" // Màu kế thừa (tương đương text-gray-500)
            href="#"
          >
            <HomeIcon sx={{ mr: 0.5, fontSize: 'inherit' }} />
            Dashboard
          </Link>
          {/* Mục hiện tại (không phải link) */}
          <Typography color="text.primary">
            Certificate Management
          </Typography>
        </Breadcrumbs>
      </Box>

      {/* Khối bên phải (Ngày/giờ) */}
      <Box 
        sx={{
          // Tương đương "hidden md:block"
          display: { xs: 'none', md: 'block' },
          textAlign: 'right', // text-right
          color: 'text.secondary' // Tương đương text-gray-500
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
          {formattedDate}
        </Typography>
        <Typography variant="body2">
          {formattedTime}
        </Typography>
      </Box>
    </Paper>
  );
};

// export default UserGreetingSection; // Bỏ comment nếu bạn muốn export default