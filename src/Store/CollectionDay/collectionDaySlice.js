import {createSlice} from '@reduxjs/toolkit';
import {fetchCollectionDay} from './index';

const initialState = {
    data: [],
    loading: false,
    error: null,
};

export const collectionDaySlice = createSlice({
    name: 'collectionDay',
    initialState,
    reducers: {
        reset: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCollectionDay.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCollectionDay.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchCollectionDay.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
                    ? action.payload.error
                    : 'Somthing Went Wrong';
            });
    },
});

export const {reset} = collectionDaySlice.actions;
export default collectionDaySlice.reducer;
