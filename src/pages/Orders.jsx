import React, { useContext, useEffect } from 'react';
import { getUserInfo, getUserOrders } from '../api/api';
import { Typography, Box } from '@mui/material';
import OrdersList from '../components/OrdersList';
import AuthContext from '../context/authContext';

const EmptyOrders = () => (
    <div>not orders yet</div>
)

const Orders = () => {
  const { myOrders } = useContext(AuthContext);

  useEffect(()=>{
    (async()=>{
        try {
            const userOrders = await getUserOrders();
        } catch (error) {
            console.log(error)
        }
    })()
}, [])


  return (
    <Box sx={{ padding: '1rem' }}>
        <Typography variant='h2' textAlign='center' fontWeight='bold' sx={{ fontSize: { xs:'2rem', sm:'4rem' } }}>Today Orders</Typography>
        { myOrders.length > 0 ? <OrdersList /> : <EmptyOrders /> }
    </Box>
  )
}

export default Orders