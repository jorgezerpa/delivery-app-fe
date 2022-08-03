import React from 'react';
import {  Container, Box } from '@mui/material';
import ClusterCard from '../components/ClusterCard';

const clusters = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6];

const Home = () => {
  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mt: '30px' }}>
        {clusters.map((cluster, index)=>(
              <ClusterCard key={ cluster+index+"cluster" } />
        ))}
      </Box>
    </Container>
  )
}

export default Home