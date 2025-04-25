// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import tradeReducer from './features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    tradeData: tradeReducer,
  },
});
