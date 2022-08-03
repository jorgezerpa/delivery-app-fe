import React from 'react';
import { Box, Typography } from '@mui/material';

const ClusterCard = ({ cluster }) => {
  return (
    <Box sx={{ width: '200px', height: '200px' }}>
        <Typography>{ cluster.cluster }</Typography>
        <Typography>{ cluster.resources }</Typography>
    </Box>
  )
}

export default ClusterCard