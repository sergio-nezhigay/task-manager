import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

const filtersInitialState = {
  status: statusFilters.completed,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

// bad to have default with others!!!!

export const filtersReducer = filtersSlice.reducer;
export const { setStatusFilter } = filtersSlice.actions;
