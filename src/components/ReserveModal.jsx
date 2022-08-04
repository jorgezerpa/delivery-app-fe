import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { makeReservation } from '../api/api';


const ReserveModal = ({ open, modalInfo, setOpenModal }) => {
    const city = useRef(null);
    const direction = useRef(null);

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const handleReservation = async() => {
        try {
            const data = {
                city: city.current.value,
                direction: direction.current.value,
            };
            const response = await makeReservation(modalInfo.id);
            setOpenModal(false)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <Dialog open={open} sx={{ '.MuiDialog-paper': {padding:'20px'} }}>
        <Typography onClick={handleCloseModal}>close</Typography>
        <DialogTitle textAlign='center'>{ modalInfo.cluster }</DialogTitle>
        <Typography textAlign='center'>resources: { modalInfo.resources }</Typography>
        <TextField inputRef={city} label='city' sx={{ mb:2, mt:2 }} />
        <TextField inputRef={direction} label='Direction' sx={{ mb:2 }}/>
        <Button onClick={ handleReservation } >Reserve</Button>
    </Dialog>
  );
}

ReserveModal.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default ReserveModal;

