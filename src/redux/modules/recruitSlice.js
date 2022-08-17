import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookieToken } from "../../storage/Cookie";

let initialID = 1;

const usertoken = getCookieToken();

//초기 상태값
const initialState = {
  recruits: [],
  isLoading: false,
  error: null,
  rec: {},
  isFinish: false,
};

export const getRecruitsData = createAsyncThunk(
  "recruits/getRecruitsData",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://hosung.shop/api/v1/posts");

      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addRecruit = createAsyncThunk(
  "recruits/addRecruit",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(
        "http://hosung.shop/api/v1/auth/recruits",
        {
          createdAt: payload.date,
          jobTitle: payload.title,
          techStackList: payload.stack,
          description: payload.desc,
        },
        { headers: { authorization: usertoken } }
      );
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteRecruit = createAsyncThunk(
  "recruits/deleteRecruit",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.delete(
        `http://hosung.shop/api/v1/auth/recruits/${payload}`,
        { headers: { authorization: usertoken } }
      );
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
    }
  }
);

export const sendComment = createAsyncThunk(
  "recruits/sendComment",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.patch(
        `http://localhost:3001/posts/${payload.id}`,
        {
          commentList: [{ content: payload.comment }],
        }
      );
      return thunkAPI.fulfillWithValue({ id: payload.id, response: data.data });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const recruitSlice = createSlice({
  name: "recruits",
  initialState,
  reducers: {},
  extraReducers: {
    [getRecruitsData.pending]: (state) => {
      state.isFinish = false;
      state.isLoading = true;
    },
    [getRecruitsData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isFinish = true;
      state.recruits = action.payload;
      console.log(action.payload);
    },
    [getRecruitsData.rejected]: (state, action) => {
      state.isLoading = false;
      state.isFinish = true;
      state.error = action.payload;
    },
    [addRecruit.fulfilled]: (state, action) => {
      state.recruits.push(action.payload);
    },
    [sendComment.fulfilled]: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        recruits: state.recruits.map((r) =>
          r.id === action.payload.id
            ? {
                ...r,
                commentList: [
                  { content: action.payload.commentList[0].content },
                ],
              }
            : r
        ),
      };
    },
  },
});

export const { getRecruitById } = recruitSlice.actions;
export default recruitSlice.reducer;
