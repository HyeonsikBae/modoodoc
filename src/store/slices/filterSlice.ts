import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface filterStore {
  filter: string;
}

const initialState = {
  filter: "",
} as filterStore;

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    filterAll: (state, action: PayloadAction<filterStore>) => {
      return action.payload;
    },
    initFilter: (state) => {
      return initialState;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

export const { filterAll, initFilter, setFilter } = filterSlice.actions;

export default filterSlice.reducer;
