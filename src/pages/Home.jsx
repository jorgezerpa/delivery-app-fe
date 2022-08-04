import React, { useContext, useState } from 'react';
import {  Container, Box } from '@mui/material';
import ClusterCard from '../components/ClusterCard';
import AuthContext from '../context/authContext';
import ReserveModal from '../components/ReserveModal';

const mockCluster = { cluster: '00:00', resources: 3 };
const mockClusters = [];
for(let i = 0; i<24; i++){
  mockClusters.push(mockCluster);
}

const Home = () => {
  const { clusters } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mt: '30px' }}>
        {clusters.map((cluster, index)=>(
              <ClusterCard key={ cluster.cluster+'home'+Math.random() } cluster={cluster} setOpenModal={setOpenModal} setModalInfo={setModalInfo} />
        ))}
      </Box>

      <ReserveModal open={openModal} setOpenModal={setOpenModal} modalInfo={modalInfo} />
    </Container>
  )
}

export default Home