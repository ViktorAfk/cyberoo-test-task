import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addRecord, getRecords } from "../../api/api";

export const getCarsRecords = createAsyncThunk('carsRecords/fetch', async() => {
  const value = await getRecords();

  return value.data;
});

export const addNewCarRecord = createAsyncThunk('createCarRecord', async(record) => {
  const value = await addRecord(record);
  return [value.data, record];
});

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

      state.carsRecords = Object.entries(payload);
    }),

    builder.addCase(getCarsRecords.rejected, state => {
      state.hasError = true;
      state.loaded = false;
    }),

    builder.addCase(addNewCarRecord.fulfilled, (state, { payload }) => {
      state.carsRecords.push(payload);
    })
  },
})

export default recordsSlice.reducer;