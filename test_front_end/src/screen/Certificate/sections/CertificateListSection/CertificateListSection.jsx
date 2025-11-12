import React from 'react';

// Import các component của MUI
import { Grid, Paper, Box, Typography, Avatar } from '@mui/material';

// Dữ liệu (giữ nguyên)
const certificateStats = [
    {
      id: 1,
      icon: "https://c.animaapp.com/iSjItHgp/img/certificate@2x.png",
      iconAlt: "Certificate",
      percentage: "10%",
      percentageColor: "success.main",
      trend: " vs last month",
      label: "Total Certificates",
      value: "150",
    },
    {
      id: 2,
      icon: "https://c.animaapp.com/iSjItHgp/img/order-completed@2x.png",
      iconAlt: "Order completed",
      percentage: "10%",
      percentageColor: "success.main",
      trend: " vs last month",
      label: "Verified",
      value: "125",
    },
    {
      id: 3,
      icon: "https://c.animaapp.com/iSjItHgp/img/diploma@2x.png",
      iconAlt: "Diploma",
      percentage: "10%",
      percentageColor: "error.main",
      trend: " vs last month",
      label: "Valid Certificates",
      value: "15",
    },
    {
      id: 4,
      icon: "https://c.animaapp.com/iSjItHgp/img/expired@2x.png",
      iconAlt: "Expired",
      percentage: "10%",
      percentageColor: "success.main",
      trend: " vs last month",
      label: "Expired Certificates",
      value: "5",
    },
    {
      id: 5,
      icon: "https://c.animaapp.com/iSjItHgp/img/clock@2x.png",
      iconAlt: "Clock",
      percentage: "10%",
      percentageColor: "success.main",
      trend: " vs last month",
      label: "On leave",
      value: "5",
    },
  ];

export const CertificateListSection = () => {
  return (
    <Box sx={{ mt: 3, mb: 3 }}>
      <Grid container spacing={2}>
        {certificateStats.map((stat) => (
          
          // 👇 SỬA LỖI Ở ĐÂY: Xóa "item" và chuyển breakpoint vào "sx"
          <Grid key={stat.id} sx={{ xs: 12, sm: 6, lg: 2.4 }}>
            
            <Paper 
              elevation={1} 
              sx={{ p: 2, borderRadius: '12px' }}
            >
              {/* Header của thẻ (Icon và % trend) */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Avatar 
                  variant="rounded" 
                  src={stat.icon} 
                  alt={stat.iconAlt}
                  sx={{ 
                    width: 40, 
                    height: 40, 
                    backgroundColor: 'grey.100', 
                    border: 1, 
                    borderColor: 'grey.200',
                    p: 0.5
                  }} 
                />
                <Typography variant="caption" sx={{ textAlign: 'right' }}>
                  <Box component="span" sx={{ color: stat.percentageColor, fontWeight: 'medium' }}>
                    {stat.percentage}
                  </Box>
                  <Box component="span" sx={{ color: 'text.secondary' }}>
                    {stat.trend}
                  </Box>
                </Typography>
              </Box>
              
              {/* Nội dung thẻ (Label và Value) */}
              <Box>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {stat.label}
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                  {stat.value}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

// export default CertificateListSection;