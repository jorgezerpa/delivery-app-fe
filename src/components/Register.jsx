import React, { useRef } from 'react';
import { Box, TextField, Typography, Button } from '@mui/material';
import { signUp } from '../api/api';

const Register = () => {
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
    const result = await signUp(data)
    console.log(result);
  }

  return (
    <Box sx={{ width: '100%' }} >
        <Typography variant='h4' textAlign='center' gutterBottom sx={{ marginBottom: '30px' }} >Sign Up</Typography>
        <TextField inputRef={name} fullWidth sx={{ marginBottom: '10px' }} label='fullName' />
        <TextField inputRef={user_name} fullWidth sx={{ marginBottom: '10px' }} label='userName' />
        <TextField inputRef={email} fullWidth sx={{ marginBottom: '10px' }} label='Email' />
        <TextField inputRef={password} fullWidth sx={{ marginBottom: '10px' }} label='password' />
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: '20px' }}>
            <Button onClick={ handleClick } variant='contained' size='large' sx={{ margin: '0 auto' }} >Sign Up</Button>
        </Box>
    </Box>
  )
}

export default Register