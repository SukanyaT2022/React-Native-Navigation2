// src/store/slices/addressSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  sameDriverAddress: false,
  user: null,
  loading: false,
  fname: '',
  lname: '',
  phone: '',
  email: '',
  address: '',
  country: '',
  state: '',
  city: '',
  imageProfile:'',
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    updateSameAddress: (state, action) => {
      state.sameDriverAddress = action.payload;
    },
    updateFname: (state, action) => {
      state.fname = action.payload;
    },
    updateLname: (state, action) => {
      state.lname = action.payload;
    },
    updatePhone: (state, action) => {
      state.phone = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updateAddress: (state, action) => {
      state.address = action.payload;
    },
    updateCountry: (state, action) => {
      state.country = action.payload;
    },
    updateState: (state, action) => {
      state.state = action.payload;
    },
    updateCity: (state, action) => {
      state.city = action.payload;
    },
      updateImageProfile: (state, action) => {
      state.imageProfile = action.payload;
    },
    
  },
});

// Export actions
export const {
  updateSameAddress,
  updateFname,
  updateLname,
  updatePhone,
  updateEmail,
  updateAddress,
  updateCountry,
  updateState,
  updateCity,  
  updateImageProfile
} = addressSlice.actions;


// Export reducer
export default addressSlice.reducer;
