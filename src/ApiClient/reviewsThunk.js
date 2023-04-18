import { createAsyncThunk } from "@reduxjs/toolkit";
import * as reviewService from "./reviews.js";

export const findReviewsThunk = createAsyncThunk(
    'reviews/getReviews', async () =>
        await reviewService.getReviews()
)

export const findReviewsForItemThunk = createAsyncThunk(
    'reviews/getReviewsForItem', async (iid) => {
        // const reviews = await reviewService.getReviewsForItem(iid)
        const reviews = await reviewService.getReviews();
        if (iid !== "") {
            return reviews.filter(review => review.itemId === iid);
        }
        return reviews;
    }
)

export const deleteReviewThunk = createAsyncThunk(
    'reviews/deleteReview',
    async (rid) => {
        await reviewService.deleteReview({rid})
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

export const updateReviewThunk = createAsyncThunk(
        'reviews/updateReview',
        async (rid, review) =>
            await reviewService.updateReview({rid, review})
    )
