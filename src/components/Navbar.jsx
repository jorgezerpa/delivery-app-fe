import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import UserMenu from './UserMenu';
import userIcon from '../assets/icons/userIcon.svg';

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
                    sx={{ position: 'relative', width: '50px', height: '50px', borderRadius: '50%'}}
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                  <img src={userIcon} alt="" style={{ position: 'absolute', top:0, left:0, bottom: 0, right: 0 }} />
                </Box>
                <UserMenu open={open} close={handleClose} anchorEl={anchorEl} />
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar