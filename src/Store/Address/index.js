import {createAsyncThunk} from '@reduxjs/toolkit';

const BASE_URL =
    'https://iweb.itouchvision.com/portal/itouchvision/kmbd_demo/address';

export const fetchAddress = createAsyncThunk(
    'address/fetchAddress',
    async (postcode, {rejectWithValue}) => {
        try {
            const response = await fetch(BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    P_GUID: 'FF93E12280E5471FE053A000A8C08BEB',
                    P_POSTCODE: postcode,
                }),
            });
            if (!response.ok) {
                throw new Error('Failed to fetch address');
            }
            const data = await response.json();
            return data.ADDRESS;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);
