import React, { useState, useEffect } from 'react';
import { getUserInfo, getUserOrders } from '../api/api';
import { Typography, Box, Button } from '@mui/material';
import userIcon from '../assets/icons/userIcon-black.svg';

const Profile = () => {
    const [user, setUser] = useState({});

    useEffect(()=>{
        (async()=>{
            try {
                const data = await getUserInfo();
                setUser(data.data.result);
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])
    
  return (
    <Box sx={{ padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ minWidth: '240px', padding: '20px', textAlign: 'center' }}>
            <Box sx={{ margin: '0 auto', position: 'relative', width: '150px', height: '150px', borderRadius: '50%' }}>
                <img src={userIcon} alt="" style={{ position: 'absolute', width: '150px', height: '150px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} />
            </Box>
            <Typography variant='h5' fontWeight='bold'>{ user.name }</Typography>
            <Typography variant='h6'>{ user.user_name }</Typography>
            <Typography variant='body1'>{ user.email }</Typography>
        </Box>
    </Box>
  )
}

export default Profile