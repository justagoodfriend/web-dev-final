import { createSlice } from "@reduxjs/toolkit";
//do update later
import {
  loginThunk,
  logoutThunk,
  registerThunk,
  profileThunk,
  updateUserLikesThunk,
  findUserByIdThunk,
  updateUserThunk
} from "../ApiClient/thunks/authThunks";
const initialState = {
  currentUser: {},
  currentTarget: {},
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [loginThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [logoutThunk.fulfilled]: (state, action) => {
      state.currentUser = {};
    },
    [registerThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [profileThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [updateUserLikesThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [findUserByIdThunk.fulfilled]: (state, { payload }) => {
      state.currentTarget = payload;
    },
    [updateUserThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    }
  },
});

export default userSlice.reducer;
