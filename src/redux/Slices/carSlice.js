import { createSlice } from '@reduxjs/toolkit';
import { afterGetCars } from './Async/Home';

//! initial state
const initialState = {
  carList: [],
};

//! reducers
const reducers = {
  addCar: ({ carList }, { payload }) => {
    carList.push(payload);
  },
};

//! extraReducers
const extraReducers = (builder) => {
  afterGetCars(builder);
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers,
  extraReducers,
});

export const { addCar } = searchSlice.actions;
export const selectSearch = (state) => state.searchCarsReducer;
export default searchSlice.reducer;
