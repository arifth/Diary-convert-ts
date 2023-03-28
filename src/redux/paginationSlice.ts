import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageCount: 1,
  currentPage: 1,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    SET_PAGE_COUNT: (state, action) => {
      state.pageCount = action.payload;
    },
    SET_CURRENT_PAGE: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {},
});

// Action creators are generated for each case reducer function
export const { SET_PAGE_COUNT, SET_CURRENT_PAGE } = paginationSlice.actions;

const { reducer } = paginationSlice;
export default reducer;
