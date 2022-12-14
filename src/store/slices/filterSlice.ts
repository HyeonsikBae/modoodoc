/* eslint-disable import/order */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: { filter: "", test: 0 } as any,
  reducers: {
    addList: (state, action: PayloadAction<any>) => {
      const str = action.payload.hospital;
      const newSet = new Set();
      newSet.add(action.payload.treat);
      if (Object.keys(state).includes(`${str}`)) {
        const setFromArray = new Set(action.payload.treat);
        newSet.add(setFromArray);
      }
      const newArray = Array.from(newSet);
      return {
        ...state,
        [`${str}`]: newArray,
      };
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

export const { addList, setFilter } = filterSlice.actions;
export default filterSlice.reducer;
