import reviewsModel from "./reviews-model.js";

export const findAllReviews = async () => {
    const reviews = await reviewsModel.find();
    return reviews;
};

// export const findReviewsByItemId = async (itemId) => {
//     const reviews = await reviewsModel.findById({ itemId });
//     return reviews;
// };
//
// export const findReviewsByBuyerId = async (buyerId) => {
//     const reviews = await reviewsModel.findById({ buyerId });
//     return reviews;
// };

//also will need create buyers/create seller
export const createReview = async (review) => {
    const reviews = await reviewsModel.create(review);
    return reviews;
};

export const updateReview = (rid, review) => {
    const reviews = reviewsModel.updateOne({ _id: rid }, review);
    return reviews;
}

export const deleteReview = (rid) => {
    const reviews = reviewsModel.deleteOne({ _id: rid });
    return reviews;
};
