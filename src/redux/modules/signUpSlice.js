import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//초기 상태값
const initialState = {
  username: "",
  password: "",
  passwordConfirm: "",
  companyName: "",
  authority: "",
  profileImageUrl: "",
  websiteUrl: "",
};

const headers = {
  "Content-type": "application/json; charset=UTF-8",
  Accept: "*/*",
};
axios.defaults.headers.post = null;

export const __signUp = createAsyncThunk(
  "signUp/__signUp",
  async (payload, thunkAPI) => {
    try {
      // "http://localhost:3001/posts"
      // "http://hosung.shop/api/v1/signup"
      console.log(payload);
      const data = await axios.post(
        "http://hosung.shop:8080/api/v1/signup",
        {
          // "username":"hanghae5",
          // "password":"hanghae5",
          // "passwordConfirm":"hanghae5",
          // "companyName":"toss",
          // "authority":"구인자",
          profileImageUrl: payload.profileImageUrl,

          username: payload.username,
          password: payload.password,
          passwordConfirm: payload.passwordConfirm,
          authority: payload.authority,
        },
        { headers }
      );

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {},
  extraReducers: {
    [__signUp.pending]: (state) => {
      state.isLoading = true;
    },
    [__signUp.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = [...state.posts, action.payload];
    },
    [__signUp.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

//이부분 필요없을듯 합니다.

export const {} = signUpSlice.actions;
export default signUpSlice.reducer;
