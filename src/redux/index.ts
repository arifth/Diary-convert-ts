import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { apiSlice } from "./feature/api/apiSlice";
import authReducer from "./authSlice";
import searchReducer from "./searchSlice";
import paginationReducer from "./paginationSlice";
// import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    search: searchReducer,
    pagination: paginationReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
