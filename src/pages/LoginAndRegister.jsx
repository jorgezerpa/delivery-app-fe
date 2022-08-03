import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Login from '../components/Login';
import Register from '../components/Register';

const LoginAndRegister = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: { xs: '90%', sm:'600px' }, margin: '40px auto' }}>
      <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} centered aria-label="loginRegister">
            <Tab label="Login" value="1" />
            <Tab label="Sign Up" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
              <Login />
        </TabPanel>
        <TabPanel value="2">
              <Register />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default LoginAndRegister;