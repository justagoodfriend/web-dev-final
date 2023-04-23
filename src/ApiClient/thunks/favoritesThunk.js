import { createAsyncThunk } from "@reduxjs/toolkit";
import * as favoritesService from "../services/favorites.js";

export const findFavoriteByUserIdThunk = createAsyncThunk(
  "details/getFavoritesByUserId",
  async (uid) => {
    const favorites = await favoritesService.getFavoritesByUserId(uid);
    return favorites;
  }
);

export const findFavoriteByItemIdThunk = createAsyncThunk(
  "details/getFavoritesByItemId",
  async (iid) => {
    const favorites = await favoritesService.getFavoritesByItemId(iid);
    return favorites;
  }
);

export const findFavoritesThunk = createAsyncThunk(
  "details/getFavorites",
  async () => {
    const favorites = await favoritesService.getFavorites();
    return favorites;
  }
);

export const createFavoriteThunk = createAsyncThunk(
  "details/createFavorite",
  async (uid, iid) => {
    console.log("after delegate iid: " + iid);
    console.log("what does this return? " + { iid });
    console.log(iid);
    console.log(iid.iid);
    const favorites = await favoritesService.createFavorite(uid, iid);
    return favorites;
  }
);

export const deleteFavoriteThunk = createAsyncThunk(
  "details/deleteFavorite",
  async (uid, iid) => {
    const favorites = await favoritesService.deleteFavorite({ uid, iid });
    return favorites;
  }
);
