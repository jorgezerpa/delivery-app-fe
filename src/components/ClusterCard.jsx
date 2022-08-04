import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

const ClusterCard = ({ cluster , setOpenModal, setModalInfo }) => {
  const [isOver, setIsOver] = useState( Boolean(cluster.isOver));
  
  const handleOpenModal = () => {
    setModalInfo(cluster);
    setOpenModal(true);
  }

  return (
    <Box sx={{ display: !isOver ? 'block' : 'none', width: '300px', height: 200, border:'1px solid #ccc', pt:1 }}>
        <Typography variant='body1' textAlign='center' pb={0}>cluster{ cluster.id }</Typography>
        <Typography variant='h5' fontWeight='bold' textAlign='center' pb={2}>{ cluster.cluster }</Typography>
        <Typography variant='body1' textAlign='center' pb={1}>resources:{ cluster.resources }</Typography>
        <Box sx={{ display:'flex', justifyContent: 'center' }}>
          <Button variant='contained' size='small' onClick={handleOpenModal} sx={{ fontWeight: 'bold' }} >reserve</Button>
        </Box>
    </Box>
  )
}

export default ClusterCard