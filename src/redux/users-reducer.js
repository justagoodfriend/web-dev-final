import { createSlice } from "@reduxjs/toolkit";
//do update later
import {
  loginThunk,
  logoutThunk,
  registerThunk,
  profileThunk,
} from "../ApiClient/authThunks";
const initialState = {
  currentUser: null,
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
      state.currentUser = null;
    },
    [registerThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [profileThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export default userSlice.reducer;
