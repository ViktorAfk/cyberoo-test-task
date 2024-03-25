import { configureStore } from "@reduxjs/toolkit";
import carsRecordsReduser from '../features/records/records';
import carReducer from '../features/car/car';

export const store  = configureStore({
  reducer: {
    records: carsRecordsReduser,
    car: carReducer,
  },
});
