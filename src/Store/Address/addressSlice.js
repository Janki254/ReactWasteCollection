import {createSlice} from '@reduxjs/toolkit';
import {fetchAddress} from './index';

const initialState = {
    data: [],
    loading: false,
    error: null,
};

export const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        reset: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAddress.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAddress.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchAddress.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
                    ? action.payload.error
                    : 'Something went wrong!';
            });
    },
});

export const {reset} = addressSlice.actions;
export default addressSlice.reducer;
