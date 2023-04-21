import axios from "axios";
const URL = "http://localhost:8080/api/favorites";

const api = axios.create({
    baseURL: "http://localhost:8080/api/favorites",
});

export const getFavoritesByUserId = async ({uid}) => {
    const response = await api.get(`${URL}/${uid}`);
    return response.data;
}

export const getFavoritesByItemId = async ({iid}) => {
    const response = await api.get(`${URL}/${iid}`);
    return response.data;
}

export const getFavorites = async () => {
    const response = await api.get(`${URL}`);
    return response.data;
}

export const createFavorite = async ({uid, iid}) => {
    const response = await api.post(`${URL}/users/${uid}/item${iid}`);
    return response.data;
}

export const deleteFavorite = async ({uid, iid}) => {
    const response = await api.delete(`${URL}/users/${uid}/item${iid}`);
    return response.data;
}