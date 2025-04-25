// src/features/counter/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";
import tradeData from "../../data/tradeData.json";
export const tradeSlice = createSlice({
  name: "tradeData",
  initialState: {
    value: [],
  },
  reducers: {
    tradeChange: (state) => {
      let tradeDataArr = [...tradeData];
      let rNum = Math.floor(Math.random() * (tradeData.length - 1 - 1 + 1)) + 1;
      let sequenceArray = Array.from(
        { length: rNum },
        (_, i) => Math.floor(Math.random() * (tradeData.length - 1 - 0 + 1)) + 0
      );
      let uniqueArray = [...new Set(sequenceArray)];
      let modifiedData = tradeDataArr.map((v, index) => {
        let value = { ...v };
        if (uniqueArray.includes(index)) {
          value.price = (Math.random() * 10).toFixed(2);
          value.hourPercentage = (Math.random() * 10).toFixed(2);
          value.volume = (Math.random() * 10).toFixed(2);
        }
        return value;
      });
      state.value = modifiedData;
    },
  },
});

export const { tradeChange } = tradeSlice.actions;

export default tradeSlice.reducer;
