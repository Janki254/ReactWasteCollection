import {createAsyncThunk} from '@reduxjs/toolkit';

const BASE_URL =
    'https://iweb.itouchvision.com/portal/itouchvision/kmbd_demo/collectionDay';

export const fetchCollectionDay = createAsyncThunk(
    'collectionDay/fetchCollectionDay',
    async (uprn, {rejectedWithValue}) => {
        try {
            const response = await fetch(BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    P_GUID: 'FF93E12280E5471FE053A000A8C08BEB',
                },
                body: JSON.stringify({
                    P_UPRN: uprn,
                    P_CLIENT_ID: 130,
                    P_COUNCIL_ID: 260,
                }),
            });
            if (!response.ok) {
                throw new Error('Failed to fetch collection day');
            }

            const data = await response.json();
            return data.collectionDay;
        } catch (error) {
            return rejectedWithValue(error.message);
        }
    },
);
