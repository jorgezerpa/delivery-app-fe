import React, { useContext } from 'react'
import { Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { deleteCookie } from '../utils/cookiesHandler';
import AuthContext from '../context/authContext';

const UserMenu = ({ open, close, anchorEl }) => {
    const navigate = useNavigate();
    const { setLoggedToken } = useContext(AuthContext);

    const logOut = () => {
        deleteCookie('token');
        setLoggedToken(false);
        navigate('/login', { replace: true });
    }

  return (
    <Menu id="basic-menu"
    anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
    transformOrigin={{vertical: 'top',horizontal: 'right',}}
    anchorEl={anchorEl} open={open} onClose={close} MenuListProps={{ 'aria-labelledby': 'basic-button', }}
    >
        <MenuItem onClick={close}>Profile</MenuItem>
        <MenuItem onClick={close}>My Orders</MenuItem>
        <MenuItem onClick={logOut}>Logout</MenuItem>
    </Menu>
  )
}

export default UserMenu