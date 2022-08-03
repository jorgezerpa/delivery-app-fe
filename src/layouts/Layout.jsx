import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { CssBaseline } from '@mui/material';
import AuthContext from '../context/authContext';

const Layout = ({ children }) => {
  const { loggedToken } = useContext(AuthContext);

  return (
    <div>
        <CssBaseline />
        { loggedToken && <Navbar />}
        { children }
    </div>
  )
}

export default Layout