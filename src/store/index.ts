
import { configureStore } from '@reduxjs/toolkit';
import addressReducer from './slices/addressSlice';

export const store = configureStore({
  reducer: {
    // address come from addressslice.ts name:'address'
    address: addressReducer,
  },
});

export default store;