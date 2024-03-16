import { configureStore } from "@reduxjs/toolkit";
import carsRecordsReduser from '../features/carsRecords'

export const store  = configureStore({
  reducer: {
    records: carsRecordsReduser,
  },

});
