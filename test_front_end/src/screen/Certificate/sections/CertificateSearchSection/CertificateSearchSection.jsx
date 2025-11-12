import React, { useState } from "react";
// Import các component của MUI
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper,
  Grid, // Vẫn import Grid
  Box,
  InputAdornment
} from "@mui/material";

// Import các icon của MUI
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import AddIcon from '@mui/icons-material/Add';
import FileUploadIcon from '@mui/icons-material/FileUpload';

export const CertificateSearchSection = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All Statuses");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const handleAddCertificate = () => {
    console.log("Add Certificate clicked");
  };

  const handleExportCSV = () => {
    console.log("Export CSV clicked");
  };

  const handleFilterClick = () => {
    console.log("Filter clicked");
  };

  return (
    <Paper
      elevation={1}
      sx={{
        p: 2, 
        mt: 3, 
        width: '100%',
        borderRadius: '8px' 
      }}
    >
      
      {/* HÀNG 1: CÁC BỘ LỌC (DÙNG MUI GRID) */}
      <Grid container spacing={2}>
        
        {/* 👇 SỬA LỖI: Di chuyển xs/md vào prop sx */}
        <Grid sx={{ xs: 12, md: 6 }}>
          <TextField
            id="certificate-search"
            type="search"
            label="Search by student name, email,..." 
            value={searchValue}
            onChange={handleSearchChange}
            fullWidth 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {/* 👇 SỬA LỖI: Di chuyển xs/md vào prop sx */}
        <Grid sx={{ xs: 12, md: 3 }}>
          <FormControl fullWidth>
            <InputLabel id="status-select-label">Status</InputLabel>
            <Select
              labelId="status-select-label"
              id="status-select"
              value={selectedStatus}
              label="Status" 
              onChange={handleStatusChange}
            >
              <MenuItem value="All Statuses">All Statuses</MenuItem>
              <MenuItem value="Verified">Verified</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* 👇 SỬA LỖI: Di chuyển xs/md vào prop sx */}
        <Grid sx={{ xs: 12, md: 3 }}>
          <TextField
            id="date"
            label="Select date"
            type="date"
            fullWidth
            InputLabelProps={{
              shrink: true, 
            }}
          />
        </Grid>
      </Grid> {/* Hết Grid */}

      {/* HÀNG 2: CÁC NÚT HÀNH ĐỘNG (DÙNG MUI BOX VỚI FLEX) */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2, 
          mt: 2, 
        }}
      >
        
        {/* Nhóm nút bên trái (Filter) */}
        <Box>
          <Button
            variant="outlined" 
            startIcon={<FilterListIcon />}
            onClick={handleFilterClick}
          >
            Filter
          </Button>
        </Box>
        
        {/* Nhóm nút bên phải (Export, Add) */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          <Button
            variant="outlined" 
            startIcon={<FileUploadIcon />}
            onClick={handleExportCSV}
          >
            Export CSV
          </Button>
          <Button
            variant="contained" 
            startIcon={<AddIcon />}
            onClick={handleAddCertificate}
          >
            Add Certificate
          </Button>
        </Box>

      </Box> {/* Hết Flex */}
      
    </Paper>
  );
};

// export default CertificateSearchSection;