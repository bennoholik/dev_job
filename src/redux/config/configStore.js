import { configureStore } from "@reduxjs/toolkit";
import recruits from "../modules/recruitSlice";
import signUpSlice from "../modules/signUpSlice";
import signIn from "../modules/signInSlice";
import recDetail from "../modules/detailSlice";

export const store = configureStore({
  reducer: {
    recruits: recruits,
    signIn: signIn,
    recDetail: recDetail,
  },
});
