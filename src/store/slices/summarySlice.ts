// src/store/slices/addressSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  pickupLocation: '',
  pickupDate: null,
  pickupTime: '',
  returnDate: '',
  returnTime: '',
  carSize: '',
  carType: '',
};

const summarySlice = createSlice({
  name: 'summary',
  initialState,
  reducers: {
    updatePickupLocation: (state, action) => {
      state.pickupLocation = action.payload;
    },
    updatePickupDate: (state, action) => {
      state.pickupDate = action.payload;
    },
    updatePickupTime: (state, action) => {
      state.pickupTime = action.payload;
    },
    updateReturnDate: (state, action) => {
      state.returnDate = action.payload;
    },
    updateReturnTime: (state, action) => {
      state.returnTime = action.payload;
    },
    updateCarSize: (state, action) => {
      state.carSize = action.payload;
    },
    updateCarType: (state, action) => {
      state.carType = action.payload;
    },
  },
});

// Export actions
export const {
  updatePickupLocation,
  updatePickupDate,
  updatePickupTime,
  updateReturnDate,
  updateReturnTime,
  updateCarSize,
  updateCarType,
} = summarySlice.actions;

// Export reducer
export default summarySlice.reducer;
