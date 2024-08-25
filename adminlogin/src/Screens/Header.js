import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment } from '@mui/material';
import rentRo from '../rentro.png'


const Header = () => {
  return (
    <div style={styles.header}>
      <img src={rentRo} alt="Logo" style={styles.logo} />
      <TextField
        placeholder="Search..."
        variant="outlined"
        size="small"
        sx={{ marginLeft: 'auto', display:'none' }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon style={{ color: '#2c3e50' }} />
            </InputAdornment>
          ),
          style: { color: '#2c3e50' },
        }}
      />
    </div>
  );
};

const styles = {
  header: {
    width: '100%',
    height: '100px',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 70px',
    borderBottom: '1px solid #ddd',
    position: 'fixed',
    top: 0,
    zIndex: 1000, 
  },
  logo: {
    width: '120px',
  },
};

export default Header;
