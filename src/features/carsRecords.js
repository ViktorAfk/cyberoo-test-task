import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRecords } from "../api/api";

export const getCarsRecords = createAsyncThunk('carsRecords/fetch', async() => {
  const value = await getRecords();
  return value.data;
})
const initialState = {
  carsRecords: [],
  hasError: false,
  loaded: true,
};

export const recordsSlice = createSlice({
  name: 'records',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCarsRecords.fulfilled, (state, { payload }) => {
      state.loaded = false;
      
      state.carsRecords = Object.entries(payload);;
    }),
    builder.addCase(getCarsRecords.rejected, state => {
      state.hasError = true;
      state.loaded = false;
    })
  }

})

export default recordsSlice.reducer;