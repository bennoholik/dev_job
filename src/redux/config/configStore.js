import { configureStore } from "@reduxjs/toolkit";
import recruits from "../modules/recruitSlice";
import signUpSlice from '../modules/signUpSlice';


export const store = configureStore({
  reducer: {
    recruits: recruits,
    signUpSlice,
  },
});
