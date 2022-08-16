import { configureStore } from "@reduxjs/toolkit";
import recruits from "../modules/recruitSlice";
import signUpSlice from '../modules/signUpSlice';
import signInSlice from '../modules/signInSlice';

export const store = configureStore({
  reducer: {
    recruits: recruits,
    signUpSlice,
    signInSlice,
  },
});
