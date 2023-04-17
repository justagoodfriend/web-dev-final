import { createAsyncThunk } from "@reduxjs/toolkit";
import * as reviewService from "./reviews.js";

export const findReviewsThunk = createAsyncThunk(
    'reviews/getReviews', async () =>
        await reviewService.getReviews()
)

// export const findReviewThunk = createAsyncThunk(
//     'reviews/getReviewById', async (rid) => {
//         await reviewService.getReviewById(rid)
//         return rid
//     }
// )

export const deleteReviewThunk = createAsyncThunk(
    'reviews/deleteReview',
    async (rid) => {
        await reviewService.deleteReview(rid)
        return rid
    }
)

export const createReviewThunk = createAsyncThunk(
    'reviews/createReview',
    async (review) => {
        const newReview = await reviewService.createReview(review)
        return newReview
    }
)

export const updateReviewThunk =
    createAsyncThunk(
        'reviews/updateReview',
        async (rid, review) =>
            await reviewService.updateReview({rid, review})
    )
