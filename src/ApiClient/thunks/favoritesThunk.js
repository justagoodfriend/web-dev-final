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

export const findFavoritesForItemandUserThunk = createAsyncThunk(
  "details/getUserandIdFavorite",
  async (item) => {
    const favorites = await favoritesService.getFavoritesOfUserAndID(item);
    //console.log("getting items back from db");
    //console.log(favorites);
    return favorites;
  }
);

export const createFavoriteThunk = createAsyncThunk(
  "details/createFavorite",
  async (item) => {
    console.log(item);
    const favorites = await favoritesService.createFavorite(item);
    return favorites;
  }
);

export const deleteFavoriteThunk = createAsyncThunk(
  "details/deleteFavorite",
  async (item) => {
    const favorites = await favoritesService.deleteFavorite(item);
    return favorites;
  }
);
