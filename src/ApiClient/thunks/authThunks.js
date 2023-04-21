import { createAsyncThunk } from "@reduxjs/toolkit";
import * as userService from "../services/users.js";

//may need another field idk
export const loginThunk = createAsyncThunk(
  "users/login",
  async (credentials) => {
    const user = await userService.login(credentials);
    return user;
  }
);

export const logoutThunk = createAsyncThunk(
  "users/logout",
  async (credentials) => {
    const user = await userService.logout();
    return user;
  }
);

export const registerThunk = createAsyncThunk(
  "users/register",
  async (credentials) => {
    const user = await userService.register(credentials);
    return user;
  }
);

export const profileThunk = createAsyncThunk(
  "users/profile",
  async (credentials) => {
    const user = await userService.profile();
    return user;
  }
);
