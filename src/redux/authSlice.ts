import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "./feature/api/apiSlice";
import { endpoints } from "./feature/api/apiSlice";

const initialState = {
  isLoggedIn: false,
  messageSuccess: "",
  messageError: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LOGIN_SUCCESS: (state, action) => {
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("token", action.payload?.data?.access_token);
    },
    LOGOUT: (state, action) => {
      state.isLoggedIn = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers(builder) {
    builder.addMatcher(
      endpoints.login.matchRejected,
      (state: any, action: any) => {
        state.messageError = action.payload?.data?.message;
      }
    );
  },
});

// Action creators are generated for each case reducer function
export const { LOGIN_SUCCESS, LOGOUT } = authSlice.actions;

const { reducer } = authSlice;
export default reducer;
