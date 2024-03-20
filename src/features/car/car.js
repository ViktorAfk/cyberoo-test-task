import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getRecord } from "../../api/api";


export const getCarRecord = createAsyncThunk('car/fetch', async(id) => {
  const value = await getRecord(id);
  return value.data;
});

const initialState = {
  currentCar: null,
  hasError: false,
  loaded: true,
};

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCarRecord.pending, state => {
      state.loaded = true;
    })
    builder.addCase(getCarRecord.fulfilled, (state, action) => {
      state.currentCar = action.payload;
      state.loaded = false;
    }),
    builder.addCase(getCarRecord.rejected, state => {
      state.hasError = true;
    })
  }
});


export default carSlice.reducer;