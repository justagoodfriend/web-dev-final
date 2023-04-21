import axios from "axios";
const URL = "http://localhost:8080/api/reviews";

const api = axios.create({
    baseURL: "http://localhost:8080/api/reviews",
    withCredentials: true
});

export const createReview = async (review) => {
    const response = await api.post(`${URL}/create`, {
        review
    });
    return response.data;
};

export const getReviews = async () => {
    const response = await api.get(`${URL}`);
    return response.data;

}

export const getReviewsForUserId = async (uid) => {
    const response = await api.get(`${URL}/user/${uid}`);
    return response.data;
}


export const getReviewsForItemId = async (iid) => {
    const response = await api.get(`${URL}/item/${iid}`);
    return response.data;
}

export const updateReview = async (rid, review) => {
    console.log("test", review);
    const response = await api.put(`${URL}/update/${rid}`, {
        review
    })
    return response.data;
}

export const deleteReview = async (rid) => {
    console.log("rid again", rid);
    const response = await api.delete(`${URL}/delete/${rid}`);
    return response.data;
}
