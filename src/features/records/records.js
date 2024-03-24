import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addRecord, deleteRecord, getRecords } from "../../api/api";

export const getCarsRecords = createAsyncThunk('carsRecords/fetch', async() => {
  const value = await getRecords();

  return value.data;
});

export const addNewCarRecord = createAsyncThunk('createCarRecord/fetch', async(record) => {
  const value = await addRecord(record);
  const { name } = value.data
  return [name, record];
});

export const deleteCarRecord = createAsyncThunk('deleteRecord/fetch', async(name) => {
  const value = await deleteRecord(name);

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
  reducers: {
    removeCarRecord: (state, {payload}) => {
      const findCurIndex = state.carsRecords.findIndex(([ name ]) => name === payload);
      console.log(findCurIndex)
      state.carsRecords.splice(findCurIndex, 1);
    },
  },
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
    });
  }
});

export const { removeCarRecord } = recordsSlice.actions;
export default recordsSlice.reducer;