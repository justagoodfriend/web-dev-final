import { createSlice } from "@reduxjs/toolkit";

import {
  findFavoritesThunk,
  findFavoriteByUserIdThunk,
  findFavoriteByItemIdThunk,
  createFavoriteThunk,
  deleteFavoriteThunk,
  findFavoritesForItemandUserThunk,
} from "../ApiClient/thunks/favoritesThunk.js";

const initialState = {
  favorites: [],
  loading: false,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  extraReducers: {
    [findFavoritesThunk.pending]: (state) => {
      state.loading = true;
      state.favorites = [];
    },
    [findFavoritesThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.favorites = payload;
    },
    [findFavoritesThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [findFavoriteByUserIdThunk.pending]: (state) => {
      state.loading = true;
      state.favorites = [];
    },
    [findFavoriteByUserIdThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.favorites = payload;
    },
    [findFavoriteByUserIdThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [findFavoriteByItemIdThunk.pending]: (state) => {
      state.loading = true;
      state.favorites = [];
    },
    [findFavoriteByItemIdThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.favorites = payload;
    },
    [findFavoriteByItemIdThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [findFavoritesForItemandUserThunk.pending]: (state) => {
      state.loading = true;
      state.favorites = [];
    },
    [findFavoritesForItemandUserThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.favorites = payload;
    },
    [findFavoritesForItemandUserThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [deleteFavoriteThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.favorites = state.favorites.filter((r) => r._id !== payload);
    },
    [createFavoriteThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.favorites.push(payload);
    },
  },
  reducers: {},
});

export default favoritesSlice.reducer;
