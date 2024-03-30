import React, {useEffect, useState} from 'react';
import {
    Typography,
    Box,
    TextField,
    Autocomplete,
    CircularProgress,
} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAddress} from '../Store/Address';
import {fetchCollectionDay} from '../Store/CollectionDay';
import {reset as adressReset} from '../Store/Address/addressSlice';
import {reset as collectionDayReset} from '../Store/CollectionDay/collectionDaySlice';

const AddressForm = () => {
    const dispatch = useDispatch();
    const [postcode, setPostcode] = useState('');
    const [selectedAddress, setSelectedAddress] = useState(null);
    const {loading: addressLoading, data: addressData} = useSelector(
        (state) => state.address,
    );

    useEffect(() => {
        if (postcode) {
            dispatch(fetchAddress(postcode));
        }
    }, [postcode, dispatch]);

    const handlePostcodeChange = (event) => {
        const newPostcode = event.target.value;
        setPostcode(newPostcode);
    };

    const handleAddressChange = (event, value) => {
        if (value) {
            setSelectedAddress(value);
            dispatch(fetchCollectionDay(value.UPRN));
        }
    };

    const handleReset = () => {
        dispatch(adressReset());
        dispatch(collectionDayReset());
        setPostcode('');
        setSelectedAddress(null);
    };

    return (
        <Box sx={{backgroundColor: '#e8e9eb', width: '75%', padding: '1rem'}}>
            <Box>
                <Typography variant='subtitle2' sx={{fontWeight: 'bold'}}>
                    Enter a Postcode
                </Typography>
                <TextField
                    size='small'
                    id='filled-basic'
                    variant='outlined'
                    sx={{mt: '.5rem'}}
                    onChange={handlePostcodeChange}
                    value={postcode}
                />
            </Box>
            <Box>
                <Typography
                    variant='subtitle2'
                    sx={{fontWeight: 'bold', mt: '1rem'}}
                >
                    Select an Address
                </Typography>
                <Autocomplete
                    size='small'
                    sx={{width: '100%'}}
                    value={selectedAddress}
                    options={addressData}
                    getOptionLabel={(option) => option.FULL_ADDRESS}
                    onChange={handleAddressChange}
                    loading={addressLoading}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                    <>
                                        {addressLoading ? (
                                            <CircularProgress
                                                color='inherit'
                                                size={20}
                                            />
                                        ) : null}
                                        {params.InputProps.endAdornment}
                                    </>
                                ),
                            }}
                        />
                    )}
                />
            </Box>
            <Typography
                sx={{mt: '1rem', cursor: 'pointer'}}
                color={'primary'}
                onClick={handleReset}
            >
                Clear address and start again
            </Typography>
        </Box>
    );
};

export default AddressForm;
