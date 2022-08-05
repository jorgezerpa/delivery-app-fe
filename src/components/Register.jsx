import React, { useRef, useContext, useState } from 'react';
import { Box, TextField, Typography, Button } from '@mui/material';
import { signUp, login } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { setCookie, getCookie} from '../utils/cookiesHandler';
import AuthContext from '../context/authContext';

const Register = () => {
  const { setLoggedToken } = useContext(AuthContext);
  const [isRepeated, setIsRepeated] = useState('');
  const navigate = useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const user_name = useRef(null);
  const password = useRef(null);

  const handleClick = async() => {
    const data = {
      name: name.current.value,
      email: email.current.value,
      user_name: user_name.current.value,
      password: password.current.value,
    }
    const signup = await signUp(data);
    if(signup.error){
      const column = signup.error.includes('email') ? 'email' : 'user_name';
      setIsRepeated(column)
      return;
    }
    const result = await login({ email: email.current.value, password:password.current.value });
    if(result.token){
      setCookie('token', result.token);
      const cookie = getCookie('token');
      setLoggedToken(cookie)
      navigate("/", { replace: true });
    }    
  }

  const handleOnChange = () => {
    setIsRepeated('');
  }

  return (
    <Box sx={{ width: '100%' }} >
        <Typography variant='h4' textAlign='center' gutterBottom sx={{ marginBottom: '30px' }} >Sign Up</Typography>
        { Boolean(isRepeated) && <Typography variant='body1' textAlign='center' mb={1} gutterBottom sx={{ marginBottom: '30px', color: '#d22' }} >Ups! there's another user with this { isRepeated }</Typography> }
        <TextField onChange={handleOnChange} inputRef={name} fullWidth sx={{ marginBottom: '10px' }} label='fullName' />
        <TextField onChange={handleOnChange} inputRef={user_name} fullWidth sx={{ marginBottom: '10px' }} label='userName' />
        <TextField onChange={handleOnChange} inputRef={email} fullWidth sx={{ marginBottom: '10px' }} label='Email' />
        <TextField onChange={handleOnChange} inputRef={password} fullWidth sx={{ marginBottom: '10px' }} label='password' />
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: '20px' }}>
            <Button onClick={ handleClick } variant='contained' size='large' sx={{ margin: '0 auto' }} >Sign Up</Button>
        </Box>
    </Box>
  )
}

export default Register