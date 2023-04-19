import axios from "axios";
const URL = "http://localhost:8080/api/details";

const api = axios.create({
    baseURL: "http://localhost:8080/api/details",
});

export const getItemById = async ({iid}) => {
    const response = await api.get(`${URL}/iid`);
    return response.data;

}