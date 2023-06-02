import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../slice/authSlice";

const store = configureStore({
  reducer: {
    Authorization: AuthReducer,
  },
});

export default store;