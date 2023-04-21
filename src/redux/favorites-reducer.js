import { createSlice } from "@reduxjs/toolkit";

import {
    findFavoritesThunk,
    findFavoriteByUserIdThunk,
    findFavoriteByItemIdThunk,
    createFavoriteThunk,
    deleteFavoriteThunk
} from "../ApiClient/thunks/favoritesThunk.js";

const initialState = {
    favorites: [],
    loading: false
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    extraReducers: {
        [findFavoritesThunk.pending]:
            (state) => {
                state.loading = true
                state.reviews = []
            },
        [findFavoritesThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.reviews = payload
            },
        [findFavoritesThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [findFavoriteByUserIdThunk.pending]:
            (state) => {
                state.loading = true
                state.reviews = []
            },
        [findFavoriteByUserIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.reviews = payload
            },
        [findFavoriteByUserIdThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [findFavoriteByItemIdThunk.pending]:
            (state) => {
                state.loading = true
                state.reviews = []
            },
        [findFavoriteByItemIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.reviews = payload
            },
        [findFavoriteByItemIdThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [deleteFavoriteThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.reviews = state.reviews
                    .filter(r => r._id !== payload)
            },
        [createFavoriteThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.reviews.push(payload)
            },
    },
    reducers: { }
});

export default favoritesSlice.reducer;
