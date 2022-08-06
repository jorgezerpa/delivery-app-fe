import React, { useRef, useContext, useState } from 'react'
import { Box, TextField, Typography, Button } from '@mui/material';
import { login } from '../api/api';
import { setCookie, getCookie} from '../utils/cookiesHandler';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/authContext';

const Login = () => {
  const navigate = useNavigate();
  const { setLoggedToken } = useContext(AuthContext);
  const email = useRef(null);
  const password = useRef(null);
  const [unauthorized, setUnauthorized] = useState(false);

  const onChange = () => {
    setUnauthorized(false);
  }

  const onClick = async() => {
    try {
      const data = {
        email: email.current.value,
        password: password.current.value,
      }
      const result = await login(data);
      if(result.token){
        setCookie('token', result.token)
        const cookie = getCookie('token');
        setLoggedToken(cookie)
        navigate("/", { replace: true });
      }
    } 
    catch (error) {
        setUnauthorized(true)
    }
  }

  return (
    <Box sx={{ width: '100%' }} >
        <Typography variant='h4' textAlign='center' gutterBottom sx={{ marginBottom: '30px' }} >Login</Typography>
        
        {unauthorized && <Typography variant='body1' textAlign='center' gutterBottom sx={{ marginBottom: '10px' }} >
            Ups! wrong email or password. ¿are you?
        </Typography> }
        
        <TextField onChange={onChange} inputRef={email} fullWidth sx={{ marginBottom: '10px' }} label='email' />
        <TextField onChange={onChange} type="password" inputRef={password} fullWidth sx={{ marginBottom: '10px' }} label='password' />
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: '20px' }}>
            <Button onClick={onClick} variant='contained' size='large' sx={{ margin: '0 auto' }} >Login</Button>
        </Box>
    </Box>
  )
}

export default Login