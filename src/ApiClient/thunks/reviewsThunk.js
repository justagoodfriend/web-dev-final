import { createAsyncThunk } from "@reduxjs/toolkit";
import * as reviewService from "../services/reviews.js";

export const findReviewsThunk = createAsyncThunk(
    'reviews/getReviews', async () =>
        await reviewService.getReviews()
)

export const findReviewsForItemThunk = createAsyncThunk(
    'reviews/getReviewsForItem', async (iid) => {
        const reviews = await reviewService.getReviewsForItemId(iid);
        return reviews;
    }
)

export const findReviewsForUserThunk = createAsyncThunk(
    'reviews/getReviewsForUser', async (uid) => {
        // console.log("got here?");
        const reviews = await reviewService.getReviewsForUserId(uid);
        console.log("got", reviews);
        return reviews;
    }
)

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

export const updateReviewThunk = createAsyncThunk(
        'reviews/updateReview',
        async ({rid, content, rating}) => {
            console.log(content);
            console.log(rating);
            console.log(rid);
            const newReview = await reviewService.updateReview(rid, content, rating)
            return newReview
        }
    )
