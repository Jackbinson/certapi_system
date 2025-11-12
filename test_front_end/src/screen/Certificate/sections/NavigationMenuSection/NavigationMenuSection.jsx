import React from 'react';
import {
  Drawer,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Toolbar
} from '@mui/material';

// Import các icon của MUI
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SearchIcon from '@mui/icons-material/Search';
import BarChartIcon from '@mui/icons-material/BarChart';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';


// BƯỚC 1: Sửa component để chỉ nhận 'drawerWidth'
export const NavigationMenuSection = ({ drawerWidth }) => {

  return (
    // BƯỚC 2: Sửa 'variant' thành "permanent" (luôn mở)
    // và XÓA prop 'open'
    <Drawer
      variant="permanent" // <-- SỬA Ở ĐÂY
      anchor="left"
      sx={{
        width: drawerWidth, // Nhận chiều rộng từ props
        flexShrink: 0, 
        '& .MuiDrawer-paper': { 
          width: drawerWidth, // Nhận chiều rộng từ props
          boxSizing: 'border-box',
          borderRadius: 0, 
          borderRight: 1, 
          borderColor: 'grey.200'
        },
      }}
    >
      <Toolbar /> 
      
      <Box sx={{ overflow: 'auto' }}>
        
        {/* NHÓM 1 (Giữ nguyên) */}
        <List>
          <ListItemButton>
            <ListItemIcon><PieChartOutlineIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          
          <ListItemButton>
            <ListItemIcon><SchoolIcon /></ListItemIcon>
            <ListItemText primary="Student certificate" />
          </ListItemButton>
          
          <ListItemButton>
            <ListItemIcon><MenuBookIcon /></ListItemIcon>
            <ListItemText primary="Course Management" />
          </ListItemButton>
          
          <ListItemButton selected>
            <ListItemIcon><AssignmentIcon /></ListItemIcon>
            <ListItemText primary="Certificate Management" />
          </ListItemButton>
          
          <ListItemButton>
            <ListItemIcon><SearchIcon /></ListItemIcon>
            <ListItemText primary="Lookup & Verification" />
          </ListItemButton>
          
          <ListItemButton>
            <ListItemIcon><BarChartIcon /></ListItemIcon>
            <ListItemText primary="Reports and Analytics" />
          </ListItemButton>
        </List>

        <Divider />

        {/* NHÓM 2 (Giữ nguyên) */}
        <List>
          <ListItemButton>
            <ListItemIcon><HelpOutlineIcon /></ListItemIcon>
            <ListItemText primary="Help" />
          </ListItemButton>
          
          <ListItemButton>
            <ListItemIcon><LogoutIcon /></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
};

// export default NavigationMenuSection;