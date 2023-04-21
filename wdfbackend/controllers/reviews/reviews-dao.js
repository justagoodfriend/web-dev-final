import reviewsModel from "./reviews-model.js";
import {ObjectId} from "mongodb";

export const findAllReviews = async () => {
    const reviews = await reviewsModel.find();
    return reviews;
};

export const findReviewsByUserId = async (userId) => {
    const reviews = await reviewsModel.find({author: new ObjectId(userId)});
    return reviews;
};

export const findReviewsByItemId = async (itemId) => {
    const reviews = await reviewsModel.find({ itemId });
    return reviews;
};

//also will need create buyers/create seller
export const createReview = async (review) => {
    const reviews = await reviewsModel.create(review);
    return reviews;
};

export const updateReview = async (rid, review) => {
    console.log("update", review);
    const reviews = await reviewsModel.updateOne({ _id: rid }, {$set: review});
    return reviews;
}

export const deleteReview = async (rid) => {
    const reviews = await reviewsModel.deleteOne({ _id: rid });
    return reviews;
};
