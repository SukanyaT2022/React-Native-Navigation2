
import { configureStore } from '@reduxjs/toolkit';
import addressReducer from './slices/addressSlice';
import summaryReducer from './slices/summarySlice';
export const store = configureStore({
  reducer: {
    // address come from addressslice.ts name:'address'
    address: addressReducer,
    summary: summaryReducer,
  },
});

export default store;