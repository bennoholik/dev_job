import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialID = 1;

//초기 상태값
const initialState = {
  recruits: [
    {
      createdAt: "2022-07-25T00:13:16.136823",
      id: 1,
      comapanyName: "toss",
      jobTitle: "[토스] - 프론트엔드 개발자 채용",
      techStackList: ["React"],
      description:
        " 토스(비바리퍼블리카)는 2015년 2월 공인인증서 없이 쉽고 빠르게 송금할수 있는 간편 송금 서비스",
    },
    {
      createdAt: "2022-07-25T00:13:16.136823",
      id: 2,
      comapanyName: "toss",
      jobTitle: "[토스] - 프론트엔드 개발자 채용",
      techStackList: ["React"],
      description:
        " 토스(비바리퍼블리카)는 2015년 2월 공인인증서 없이 쉽고 빠르게 송금할수 있는 간편 송금 서비스",
    },
  ],

  isLoading: false,
  error: null,
};

export const recruitSlice = createSlice({
  name: "recruits",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const {} = recruitSlice.actions;
export default recruitSlice.reducer;
