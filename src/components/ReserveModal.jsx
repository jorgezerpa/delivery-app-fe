import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { makeReservation } from '../api/api';


const ReserveModal = ({ open, modalInfo, setOpenModal }) => {
    const [city, setCity] = useState('');
    const [isIncomplete, setIsIncomplete] = useState(false);
    const pickupDirection = useRef(null);
    const dispatchDirection = useRef(null);

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const handleReservation = async() => {
        try {
            const data = {
                city: city,
                pickupDirection: pickupDirection.current.value,
                dispatchDirection: dispatchDirection.current.value
            };
            //very simple validation
            if(city.length>0 && pickupDirection.current.value && dispatchDirection.current.value){
                const response = await makeReservation(modalInfo.id);
                setOpenModal(false)
            } else {
                setIsIncomplete(true);
            }

        } catch (error) {
            console.log(error)
        }
    }

    const handleSelectChange = (event) => {
        setCity(event.target.value);
    };

    const handleOnChange = (event) => {
        setIsIncomplete(false)
    };


  return (
    <Dialog open={open} sx={{ '.MuiDialog-paper': {padding:'20px'} }}>
        <Typography onClick={handleCloseModal} textAlign='right' sx={{ color: '#d22' }} >cancel</Typography>
        <DialogTitle textAlign='center' fontWeight='bold' variant='h5'>
            { modalInfo.cluster }
        </DialogTitle>
        { isIncomplete && <Typography onClick={handleCloseModal} sx={{ color: '#d22', fontSize:'.8rem', textAlign: 'center', mb:2 }} >All inputs are required</Typography> }
        <Select
            mb={2}
            labelId="select-city"
            id="select-city"
            value={city}
            label="City"
            onClick={()=>setIsIncomplete(false)}
            onChange={handleSelectChange}
            aria-labelledby='city'
        >
            <MenuItem value='New York'>New York</MenuItem>
            <MenuItem value='Alabama'>Alabama</MenuItem>
            <MenuItem value='Bancouver'>Bancouver</MenuItem>
            <MenuItem value='Giorgia'>Giorgia</MenuItem>
            <MenuItem value='Montreal'>Montreal</MenuItem>
        </Select>

        <Box mb={2}></Box>
        <TextField onChange={handleOnChange} inputRef={pickupDirection} label='Pickup Direction' sx={{ mb:2 }}/>
        <TextField onChange={handleOnChange} inputRef={dispatchDirection} label='Dispatch Direction' sx={{ mb:2 }}/>
        
        <Button variant='contained' onClick={ handleReservation } >Reserve</Button>
    </Dialog>
  );
}

ReserveModal.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default ReserveModal;

