import { combineReducers, configureStore } from '@reduxjs/toolkit';
import collectionDaySlice from './CollectionDay/collectionDaySlice';
import addressSlice from './Address/addressSlice';

const rootReducer = combineReducers({
    address: addressSlice,
    collectionDay: collectionDaySlice,
});

export const store = configureStore({
    reducer: rootReducer,
});
