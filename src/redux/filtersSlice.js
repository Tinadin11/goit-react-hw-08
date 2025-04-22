import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: { name: "" },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const selectFilter = (state) => state.filter.name;
export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;


