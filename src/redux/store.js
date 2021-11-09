import { configureStore } from '@reduxjs/toolkit';
import carSlice from 'redux/Slices/carSlice';

export default configureStore({
  reducer: {
    carSlice,
  },
});
