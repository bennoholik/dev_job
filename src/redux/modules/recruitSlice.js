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
      const data = await axios.get("https://hosung.shop/api/v1/posts");

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
        "https://hosung.shop/api/v1/auth/recruits",
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

// export const deleteRecruit = createAsyncThunk(
//   "recruits/deleteRecruit",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await axios.delete(
//         `http://hosung.shop/api/v1/auth/recruits/${payload}`,
//         { headers: { authorization: usertoken } }
//       );
//       console.log(payload);
//       console.log(data.data);
//       const response = { id: payload, msg: data.data };
//       return thunkAPI.fulfillWithValue(data.data);
//     } catch (error) {
//       console.log(error);
//       alert(error);
//     }
//   }
// );

export const deleteRecruit = createAsyncThunk(
  "recruits/deleteRecruit",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.delete(
        `https://hosung.shop/api/v1/auth/recruits/${payload}`,
        { headers: { authorization: usertoken } }
      );
      const response = { id: payload, msg: data.data };

      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const editRecruit = createAsyncThunk(
  "recruits/editRecruit",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await axios.put(
        `https://hosung.shop/api/v1/auth/recruits/${payload.id}`,
        {
          jobTitle: payload.editedTitle,
          techStackList: payload.editedStack,
          description: payload.editedDesc,
        },
        { headers: { authorization: usertoken } }
      );

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      alert(error);
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
    },
    [getRecruitsData.rejected]: (state, action) => {
      state.isLoading = false;
      state.isFinish = true;
      state.error = action.payload;
    },
    [addRecruit.fulfilled]: (state, action) => {
      state.recruits.push(action.payload);
    },
    [deleteRecruit.fulfilled]: (state, action) => {
      return {
        ...state,
        recruits: state.recruits.filter((rec) => rec.id !== action.payload.id),
      };
    },
    [editRecruit.fulfilled]: (state, action) => {
      return {
        ...state,
        recruits: state.recruits.map((rec) =>
          rec.id === action.payload.data.id
            ? {
                ...rec,
                jobTitle: action.payload.data.jobTitle,
                description: action.payload.data.description,
                createdAt: action.payload.data.updatedAt,
                stackList: action.payload.data.stackList,
              }
            : rec
        ),
      };
    },
  },
});

export const { getRecruitById } = recruitSlice.actions;
export default recruitSlice.reducer;
