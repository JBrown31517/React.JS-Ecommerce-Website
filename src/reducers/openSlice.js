import { createSlice } from '@reduxjs/toolkit';

export const openSlice = createSlice({
  name: 'open',
  initialState: {
    value: false,
  },
  reducers: {
    openCart: (state) => {
      state.value = true;
    },
    closeCart: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openCart, closeCart } = openSlice.actions;

export default openSlice.reducer;
