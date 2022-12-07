import React, { useContext, useState, useEffect } from 'react';
import {  Container, Box, Typography } from '@mui/material';
import ClusterCard from '../components/ClusterCard';
import AuthContext from '../context/authContext';
import ReserveModal from '../components/ReserveModal';
import LoadingAnimation from '../components/Loading/Loading';

const mockCluster = { cluster: '00:00', resources: 3 };
const mockClusters = [];
for(let i = 0; i<24; i++){
  mockClusters.push(mockCluster);
}

const Home = () => {
  const { clusters } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({});
  const [loading, setLoading] = useState(true);
  
  useEffect(()=>{
    if(clusters.length >= 0) setLoading(false);
}, [clusters])

  return (
    <Container>
        { loading && <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }} ><LoadingAnimation /></Box> }
        { !loading && <>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mt: '30px', gap: '20px' }}>
            {clusters.map((cluster)=>(<ClusterCard key={ cluster.id+'home' } cluster={cluster} setOpenModal={setOpenModal} setModalInfo={setModalInfo} />))}
          </Box>
          <ReserveModal open={openModal} setOpenModal={setOpenModal} modalInfo={modalInfo} />
        </> }
    </Container>
  )
}

export default Home