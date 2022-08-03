import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import UserMenu from './UserMenu';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

  return (
    <AppBar sx={{ position: 'relative' }}>
        <Toolbar >
            <Box sx={{ flex:1 }}>
                <Typography component={Link} to='/' sx={{ color: '#fff', textDecoration: 'none' }} >LOGO</Typography>
            </Box>
            <Box>
                <Box 
                    sx={{ width: '50px', height: '50px', borderRadius: '50%', background: '#ccc' }}
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                ></Box>
                <UserMenu open={open} close={handleClose} anchorEl={anchorEl} />
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar