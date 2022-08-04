import React, { useState, useEffect } from 'react';
import { getUserInfo, getUserOrders } from '../api/api';
import { Typography, Box, Button } from '@mui/material';

const Orders = () => (
    <div>your orders</div>
)

const EmptyOrders = () => (
    <div>not orders yet</div>
)


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
        <Box sx={{ width: '200px', padding: '20px', textAlign: 'center' }}>
            <Box sx={{ width: '150px', height: '150px', background: '#ccc', borderRadius: '50%' }}></Box>
            <Typography variant='h4'>{ user.name }</Typography>
            <Typography variant='h6'>{ user.user_name }</Typography>
            <Typography variant='body1'>{ user.email }</Typography>
        </Box>
    </Box>
  )
}

export default Profile