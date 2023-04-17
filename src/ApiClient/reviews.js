import axios from "axios";
const URL = "http://localhost:8080/api/reviews";

const api = axios.create({
    baseURL: "http://localhost:8080/api/reviews",
});

export const createReview = async ({ buyerId, content, rating }) => {
    const response = await api.post(`${URL}/create`, {
        buyerId,
        content,
        rating,
    });

    return response.data;
};

export const getReviews = async () => {
    const response = await api.get(`${URL}`);
    return response.data;

}

// export const getReviewByBuyerId = async ({ rid }) => {
//     const response = await api.get(`${URL}/${rid}`);
//     return response.data;
// }
//
// export const getReviewByItemId = async ({ rid }) => {
//     const response = await api.get(`${URL}/${rid}`);
//     return response.data;
// }

export const updateReview = async ({ rid, review }) => {
    const response = await api.put(`${URL}/update/${rid}`, {
        review
    })
    return response.data;
}

export const deleteReview = async ({ rid }) => {
    const response = await api.delete(`${URL}/delete${rid}`);
    return response.data;
}
