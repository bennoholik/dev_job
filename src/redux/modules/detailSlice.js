import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookieToken } from "../../storage/Cookie";

let initialID = 1;

const usertoken = getCookieToken();

//초기 상태값
const initialState = {
  recDetail: [],
  isLoading: false,
  error: null,
  isFinish: false,
};

export const getRecruitDetail = createAsyncThunk(
  "recruits/getRecruitsDetail",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        `http://hosung.shop/api/v1/posts/${payload}`
      );
      console.log(data.data.data);

      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const sendComment = createAsyncThunk(
  "recruits/sendComment",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(
        `http://hosung.shop/api/v1/auth/recruits/${payload.pid}/comments`,
        {
          content: payload.content,
        },
        { headers: { authorization: usertoken } }
      );

      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteComment = createAsyncThunk(
  "recruits/deleteComment",
  async (payload, thunkAPI) => {
    console.log(payload);

    try {
      const data = await axios.delete(
        `http://hosung.shop/api/v1/auth/recruits/${payload.postid}/comments`,
        {
          headers: { authorization: usertoken },
          data: { commentId: payload.commentId },
        }
      );

      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const editComment = createAsyncThunk(
  "recruits/editComment",
  async (payload, thunkAPI) => {
    console.log(payload);

    try {
      const data = await axios.put(
        `http://hosung.shop/api/v1/auth/recruits/${payload.postid}/comments`,
        { commentId: payload.commentId, content: payload.content },
        {
          headers: { authorization: usertoken },
        }
      );

      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const sendReply = createAsyncThunk(
  "recruits/sendReplay",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await axios.post(
        `http://hosung.shop/api/v1/auth/recruits/comments/${payload.commentId}`,
        {
          content: payload.replyContent,
        },
        { headers: { authorization: usertoken } }
      );
      const response = { id: payload.commentId, datas: data.data.data };
      console.log(data);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const detailSlice = createSlice({
  name: "recDetail",
  initialState,
  reducers: {},
  extraReducers: {
    [getRecruitDetail.pending]: (state) => {
      state.isFinish = false;
      state.isLoading = true;
    },
    [getRecruitDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isFinish = true;
      state.recDetail = action.payload;
    },
    [getRecruitDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.isFinish = true;
      state.error = action.payload;
    },
    [sendComment.fulfilled]: (state, action) => {
      const commentdata = {
        content: action.payload.content,
        createdAt: action.payload.createdAt,
        id: action.payload.id,
        user: {
          profileImageUrl: action.payload.profileImageUrl,
          username: action.payload.username,
        },
      };
      state.recDetail.commentList.push(commentdata);
    },
    [deleteComment.fulfilled]: (state, action) => {
      console.log(action.payload.id);
      return {
        ...state,
        recDetail: {
          ...state.recDetail,
          commentList: state.recDetail.commentList.filter(
            (rec) => rec.id !== action.payload.id
          ),
        },
      };
    },
    [editComment.fulfilled]: (state, action) => {
      console.log(action.payload);
      console.log(current(state.recDetail.commentList));
      return {
        ...state,
        recDetail: {
          ...state.recDetail,
          commentList: state.recDetail.commentList.map((rec) =>
            rec.id === action.payload.id
              ? {
                  ...rec,
                  content: action.payload.content,
                }
              : rec
          ),
        },
      };
    },
    [sendReply.fulfilled]: (state, action) => {
      console.log(action.payload);
      // const commentdata = {
      //   content: action.payload.content,
      //   createdAt: action.payload.createdAt,
      //   id: action.payload.id,
      //   username: action.payload.username,

      //   // profileImageUrl: action.payload.profileImageUrl,
      // };
      return {
        ...state,
        recDetail: {
          ...state.recDetail,
          commentList:
            state.recDetail.commentList &&
            state.recDetail.commentList.map((rec) =>
              rec.id === action.payload.id
                ? {
                    ...rec,
                    recommentList: [
                      // ...state.recDetail.commentList[].recommentList,
                      action.payload.datas,
                    ],
                  }
                : rec
            ),
        },
      };

      // state.recDetail.commentList.push(commentdata);
    },
  },
});

export const {} = detailSlice.actions;
export default detailSlice.reducer;
