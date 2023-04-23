import { createSlice } from "@reduxjs/toolkit";
//do update later
import {
    findReviewsThunk,
    findReviewsForItemThunk,
    findReviewsForUserThunk,
    deleteReviewThunk,
    createReviewThunk,
    updateReviewThunk,
} from "../ApiClient/thunks/reviewsThunk.js";
const initialState = {
    reviews: [],
    loading: false
};

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    extraReducers: {
        [findReviewsThunk.pending]:
            (state) => {
                state.loading = true
                state.reviews = []
            },
        [findReviewsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.reviews = payload
            },
        [findReviewsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [findReviewsForItemThunk.pending]:
            (state) => {
                state.loading = true
                state.reviews = []
            },
        [findReviewsForItemThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.reviews = payload
            },
        [findReviewsForItemThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [findReviewsForUserThunk.pending]:
            (state) => {
                state.loading = true
                state.reviews = []
            },
        [findReviewsForUserThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.reviews = payload
            },
        [findReviewsForUserThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [deleteReviewThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.reviews = state.reviews
                    .filter(r => r._id !== payload)
            },
        [createReviewThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.reviews.push(payload)
            },
        [updateReviewThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const reviewNdx = state.reviews
                    .findIndex((r) => r._id === payload._id)
                state.reviews[reviewNdx] = {
                    ...state.reviews[reviewNdx],
                    ...payload
                }
            }
    },
    reducers: { }
});

export default reviewsSlice.reducer;
