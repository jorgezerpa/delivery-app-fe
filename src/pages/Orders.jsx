import React, { useContext, useEffect, useState } from 'react';
import { getUserInfo, getUserOrders } from '../api/api';
import { Typography, Box } from '@mui/material';
import OrdersList from '../components/OrdersList';
import AuthContext from '../context/authContext';
import LoadingAnimation from '../components/Loading/Loading';

const EmptyOrders = () => (
    <Typography variant='h6' textAlign='center' pt={3} >Not orders yet</Typography>
)

const Loading = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'center', height: '80vh' }}>
    <LoadingAnimation />
  </Box>
)


const Orders = () => {
  const { myOrders } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    (async()=>{
        try {
            const userOrders = await getUserOrders();
            setLoading(false);
        } catch (error) {
            console.log(error)
        }
    })()
}, [])


  return (
    <Box sx={{ padding: '1rem' }}>
        { loading && <Loading /> }
        { !loading && (
            <>
            <Typography variant='h2' textAlign='center' fontWeight='bold' sx={{ fontSize: { xs:'2rem', sm:'4rem' } }}>Today Orders</Typography>
              { myOrders.length > 0 ? <OrdersList /> : <EmptyOrders /> }
            </>
        )}
    </Box>
  )
}

export default Orders