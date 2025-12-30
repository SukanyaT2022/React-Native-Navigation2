import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  paymentMethod: '',
  cardNumber: '',
  cardName: '',
  expiryDate: '',
  cvv: '',

};
const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    updatePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
    updateCardNumber: (state, action) => {
      state.cardNumber = action.payload;
    },
    updateCardName: (state, action) => {
      state.cardName = action.payload;
    },
    updateExpiryDate: (state, action) => {
      state.expiryDate = action.payload;
    },
    updateCvv: (state, action) => {
      state.cvv = action.payload;
    },
  },
});
// Export actions
export const {
  updatePaymentMethod,
  updateCardNumber,
  updateCardName,
  updateExpiryDate,
  updateCvv,
} = paymentSlice.actions;
// Export reducer
export default paymentSlice.reducer;