// src/store/slices/addressSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 sameDriverAddress: false,
  user: null,
loading: false,
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementByAmount: (state, action) => {
      state.counter += action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    reset: (state) => {
      state.counter = 0;
      state.user = null;
      state.loading = false;
    },
  },
});

// Export actions
export const { 
  increment, 
  decrement, 
  incrementByAmount, 
  setUser, 
  setLoading, 
  reset 
} = addressSlice.actions;

// Export selectors
export const selectCounter = (state:any) => state.example.counter;
export const selectUser = (state:any) => state.example.user;
export const selectLoading = (state:any) => state.example.loading;

// Export reducer
export default addressSlice.reducer;