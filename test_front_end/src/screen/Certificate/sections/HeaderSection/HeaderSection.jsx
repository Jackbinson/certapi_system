import React, { useState } from 'react';

// Import các component của MUI
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  Box
} from '@mui/material';

// Import các icon của MUI (thay thế Hi...)
import SettingsIcon from '@mui/icons-material/Settings'; // Thay cho HiOutlineCog
import MailOutlineIcon from '@mui/icons-material/MailOutline'; // Thay cho HiOutlineMail
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'; // Thay cho HiOutlineBell
import MenuIcon from '@mui/icons-material/Menu'; // Dùng cho nút 3 gạch (NavbarToggle)

export const HeaderSection = () => {
  // Logic của MUI Menu (thay cho Dropdown): Cần state để quản lý vị trí neo
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElMobile, setAnchorElMobile] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  const handleOpenMobileMenu = (event) => {
    setAnchorElMobile(event.currentTarget);
  };
  const handleCloseMobileMenu = () => {
    setAnchorElMobile(null);
  };

  return (
    // Dùng AppBar thay cho Navbar, position="static" để nó không bị "fixed"
    <AppBar 
      position="static" 
      color="default" 
      elevation={0} // Tắt đổ bóng
      sx={{ 
        backgroundColor: 'white', 
        borderBottom: 1, // Tương đương border-b
        borderColor: 'grey.200' // Tương đương border-gray-200
      }}
    >
      <Toolbar>
        {/* Tiêu đề "WELCOME BACK USER!" */}
        <Typography 
          variant="h6" 
          component="p" 
          sx={{ 
            fontWeight: 'bold', 
            color: 'text.primary',
            display: { xs: 'none', md: 'flex' } // Tương đương hidden md:flex
          }}
        >
          WELCOME BACK USER!
        </Typography>

        {/* ------------------------------------------- */}
        {/* PHẦN DÀNH CHO MÀN HÌNH DI ĐỘNG (MOBILE) */}
        {/* ------------------------------------------- */}

        {/* Tiêu đề trên di động */}
        <Typography 
          variant="h6" 
          component="p" 
          sx={{ 
            fontWeight: 'bold', 
            color: 'text.primary',
            display: { xs: 'flex', md: 'none' } // Hiển thị trên mobile, ẩn trên desktop
          }}
        >
          Certificate Management
        </Typography>

        {/* Thêm một Box rỗng để đẩy các icon sang phải */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Nút 3 gạch (NavbarToggle) cho di động */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}> {/* Hiển thị trên mobile */}
          <IconButton
            size="large"
            onClick={handleOpenMobileMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          
          {/* Menu sổ xuống cho di động (tương đương NavbarCollapse) */}
          <Menu
            anchorEl={anchorElMobile}
            open={Boolean(anchorElMobile)}
            onClose={handleCloseMobileMenu}
            sx={{ mt: '45px' }}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={handleCloseMobileMenu} sx={{ display: { lg: 'none' } }}>
              <Typography>Search</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseMobileMenu} sx={{ display: { sm: 'none' } }}>
              <Typography>Settings</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseMobileMenu} sx={{ display: { sm: 'none' } }}>
              <Typography>Mail</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseMobileMenu} sx={{ display: { sm: 'none' } }}>
              <Typography>Notifications</Typography>
            </MenuItem>
          </Menu>
        </Box>

        {/* ------------------------------------------- */}
        {/* PHẦN DÀNH CHO MÀN HÌNH MÁY TÍNH (DESKTOP) */}
        {/* ------------------------------------------- */}

        {/* Các nút icon (chỉ hiển thị trên desktop) */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
          <IconButton color="default"> {/* Tương đương Button color="gray" pill */}
            <SettingsIcon />
          </IconButton>
          <IconButton color="default">
            <MailOutlineIcon />
          </IconButton>
          <IconButton color="default">
            <NotificationsNoneIcon />
          </IconButton>

          {/* User Menu Dropdown (dùng Menu thay cho Dropdown) */}
          <Box>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar 
                alt="User settings" 
                src="https://c.animaapp.com/iSjItHgp/img/image-6@2x.png" 
                sx={{ width: 40, height: 40 }} // Tương đương className='w-10'
              />
            </IconButton>
            <Menu
              sx={{ mt: '45px' }} // Đẩy menu xuống dưới AppBar
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              // Dùng PaperProps để style khung menu (tương đương className='w-[150px]')
              PaperProps={{
                sx: {
                  width: 220, // Tăng độ rộng (w-[150px] quá nhỏ)
                },
              }}
            >
              {/* DropdownHeader */}
              <Box sx={{ px: 2, py: 1, borderBottom: 1, borderColor: 'grey.200' }}>
                <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 'medium' }}>
                  User Name
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                  user@example.com
                </Typography>
              </Box>

              {/* DropdownItems */}
              <MenuItem onClick={handleCloseUserMenu} sx={{ color: 'text.primary' }}>
                <Typography>Dashboard</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu} sx={{ color: 'text.primary' }}>
                <Typography>Settings</Typography>
              </MenuItem>
              
              <Divider /> {/* DropdownDivider */}
              
              <MenuItem onClick={handleCloseUserMenu} sx={{ color: 'text.primary' }}>
                <Typography>Sign out</Typography>
              </MenuItem>
            </Menu>
          </Box>

        </Box>
      </Toolbar>
    </AppBar>
  );
};

// export default HeaderSection; // Bỏ comment nếu bạn muốn export default