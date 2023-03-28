import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchText: "",
  page: 1,
  data: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    WORD_TYPED: (state, action) => {
      state.searchText = action.payload;
    },
    SET_DATA: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { WORD_TYPED, SET_DATA } = searchSlice.actions;

const { reducer } = searchSlice;
export default reducer;
