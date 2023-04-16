import { createSlice } from "@reduxjs/toolkit";
//do update later
import {
    findReviewsThunk,
    // findReviewThunk,
    deleteReviewThunk,
    createReviewThunk,
    updateReviewThunk,
} from "../ApiClient/reviewsThunk.js";
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
