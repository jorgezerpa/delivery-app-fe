import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';

const headerGradient = 'linear-gradient(-10deg, #42a5f5, #1565c0)';

const ClusterCard = ({ cluster , setOpenModal, setModalInfo }) => {
  const [isOver, setIsOver] = useState( Boolean(cluster.isOver));
  const [isAvailable, setIsAvailable] = useState(true);

  useEffect(() => {
    if(cluster.resources <= 0) setIsAvailable(false);
    if(cluster.resources > 0) setIsAvailable(true);
  }, [cluster])
  
  const handleOpenModal = () => {
    setModalInfo(cluster);
    setOpenModal(true);
  }

  return (
    <Box sx={{ opacity: isAvailable ? 1 : .4 , display: !isOver ? 'block' : 'none', width: '300px', height: 200, border:'1px solid #ccc', borderRadius: '20px', overflow: 'hidden' }}>
        <Typography variant='body1' textAlign='center' pb={0} sx={{ py:1, background: headerGradient, color: '#fff', fontWeight: 'bold' }} >cluster{ cluster.id }</Typography>
        <Typography variant='h5' fontWeight='bold' textAlign='center' pb={2}>{ cluster.cluster }</Typography>
        <Typography sx={{ color: '#333' }} variant='body1' textAlign='center' pb={4}><span style={{ fontWeight:'bold' }}>delivery men:</span> { cluster.resources } available</Typography>
        <Box sx={{ display:'flex', justifyContent: 'center' }}>
          <Button variant='contained' size='small' disabled={!isAvailable} onClick={handleOpenModal} sx={{ fontWeight: 'bold' }} >reserve</Button>
        </Box>
    </Box>
  )
}

export default ClusterCard