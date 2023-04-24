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
    console.log("Logging out");
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
    console.log("got user in thunk", user);
    return user;
  }
);

export const updateUserLikesThunk = createAsyncThunk(
    "users/likes",
    async (goodsId) => {
        const user = await userService.updateLikes(goodsId);
        console.log("got updated user in thunk", user);
        return user;
    }
);

export const findUserByIdThunk = createAsyncThunk(
  "users/profile",
  async (userID) => {
    console.log("Looking for user by ID get...");
    const user = await userService.findProfile(userID);
    console.log(user);
    return user;
  }
)
