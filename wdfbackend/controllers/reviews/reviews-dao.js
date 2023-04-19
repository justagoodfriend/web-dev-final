import reviewsModel from "./reviews-model.js";

export const findAllReviews = async () => {
    const reviews = await reviewsModel.find();
    return reviews;
};

// export const findReviewsByItemId = async (itemId) => {
//     const reviews = findAllReviews().then(reviews => {
//         return reviews.
//     });
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
    console.log("update", review);
    const reviews = reviewsModel.updateOne({ _id: rid }, {$set: review});
    return reviews;
}

export const deleteReview = (rid) => {
    const reviews = reviewsModel.deleteOne({ _id: rid });
    return reviews;
};
