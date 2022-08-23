import { configureStore } from '@reduxjs/toolkit';
import openReducer from '../reducers/openSlice';

export default configureStore({
  reducer: {
    open: openReducer,
  },
});
