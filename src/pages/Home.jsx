import React, { useContext } from 'react';
import {  Container, Box } from '@mui/material';
import ClusterCard from '../components/ClusterCard';
import AuthContext from '../context/authContext';

const mockCluster = { cluster: '00:00', resources: 3 };
const mockClusters = [];
for(let i = 0; i<24; i++){
  mockClusters.push(mockCluster);
}

const Home = () => {
  const { clusters } = useContext(AuthContext);
  
  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mt: '30px' }}>
        {clusters.map((cluster, index)=>(
              <ClusterCard key={ cluster.cluster+'home' } cluster={cluster} />
        ))}
      </Box>
    </Container>
  )
}

export default Home