import React, { useContext } from 'react';
import { Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AuthContext from '../context/authContext';
import { UnreserveOrder } from '../api/api';

const OrdersList = () => {
    const { clusters, myOrders } = useContext(AuthContext);

    const handleClick = (order_id) => async() => {
        try {
            const result = await UnreserveOrder(order_id);
        } catch (error) {
            console.log(error)
        }
    }
    

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 250, maxWidth: 600, margin: '0 auto' }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell sx={{ fontWeight:'bold' }}>Order ID</TableCell>
          <TableCell sx={{ fontWeight:'bold' }} align="right">User</TableCell>
          <TableCell sx={{ fontWeight:'bold' }} align="right">Cluster</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {myOrders.map((row) => (
          <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell align="right">{ clusters.filter(cluster=>cluster.id===row.cluster_id)[0].cluster }</TableCell>
            <TableCell align="right">{
                <Button onClick={handleClick(row.id)} variant='outlined' size='small' sx={{ fontWeight:'bold'}}>unreserve</Button>
            }</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default OrdersList

