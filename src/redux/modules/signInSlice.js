import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//초기 상태값
const initialState = {
    
    username:"",
    password:"",
    passwordConfirm:"",
    companyName:"",
    authority:"",
    profileImageUrl:"",
    websiteUrl:""
   
};

const headers = {
  'Content-type': 'application/json; charset=UTF-8',
  'Accept': '*/*'
}
axios.defaults.headers.post = null

export const __signIn = createAsyncThunk(
  "signIn/__signIn",
  async (payload, thunkAPI) => {
    try {
      // "http://localhost:3001/posts"
      // "http://hosung.shop/api/v1/login"
      //"https://www.reqres.in/api/login"
      const data = await axios.post("http://hosung.shop/api/v1/login",
      {

        username : payload.username,
        password : payload.password,
        // email.username,
        // password
      }, {headers})
      console.log(data)
      return thunkAPI.fulfillWithValue(data.data);

    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {},
  extraReducers: {
    [__signIn.pending]: (state) => {
      state.isLoading = true;
    },
    [__signIn.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = [...state.posts, action.payload];
    },
    [__signIn.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = signInSlice.actions;
export default signInSlice.reducer;
