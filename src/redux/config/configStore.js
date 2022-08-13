import { configureStore } from "@reduxjs/toolkit";
import recruits from "../modules/recruitSlice";

export const store = configureStore({
  reducer: {
    recruits: recruits,
  },
});
