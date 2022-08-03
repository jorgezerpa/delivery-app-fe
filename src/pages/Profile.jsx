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
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        (async()=>{
            try {
                const data = await getUserInfo();
                const userOrders = await getUserOrders();
                setUser(data.data.result);
                setOrders(userOrders.data.result);
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])
    

    console.log(orders)

  return (
    <Box>
        <Typography variant='h2'>{ user.name }</Typography>
        <Typography variant='body1'>{ user.user_name }</Typography>
        <Typography variant='body1'>{ user.email }</Typography>
        { orders.length > 0 ? <Orders /> : <EmptyOrders /> }
    </Box>
  )
}

export default Profile