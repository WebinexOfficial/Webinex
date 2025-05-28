// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Features/AuthSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});