import { WindowOutlined } from "@mui/icons-material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setAccessToken, setUserData } from "../../storage/Cookie";

//초기 상태값
const initialState = {
  userinfo: {},
};

const headers = {
  "Content-type": "application/json; charset=UTF-8",
  Accept: "*/*",
};
axios.defaults.headers.post = null;

export const __signIn = createAsyncThunk(
  "signIn/__signIn",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      // "http://localhost:3001/posts"
      // "http://hosung.shop/api/v1/login"
      //"https://www.reqres.in/api/login"
      const data = await axios.post(
        "https://hosung.shop/api/v1/login",
        {
          username: payload.username,
          password: payload.password,
        },
        { headers }
      );
      setAccessToken(data.headers.authorization);
      setUserData(data.data.data);
      axios.defaults.headers.common[
        "Authorization"
      ] = `${data.headers.authorization}`;

      document.location.href = "/";
      // window.location.href = "/";

      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//
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
      state.userinfo = action.payload;
      console.log("user name: " + action.payload.username);
    },
    [__signIn.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      alert(action.payload.response.data.error.message);
    },
  },
});

//여기도 필요없을것 같습니다.

export const {} = signInSlice.actions;
export default signInSlice.reducer;
