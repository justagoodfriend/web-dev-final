import axios from "axios";
const URL = "http://localhost:8080/api/details";

const api = axios.create({
    baseURL: "http://localhost:8080/api/details",
});

export const getItemById = async ({iid}) => {
    const response = await api.get(`${URL}/${iid}`);
    return response.data;

}

export const getItems = async () => {
    const response = await api.get(`${URL}`);
    return response.data;
}

export const createItem = async (item) => {
    const response = await api.post(`${URL}/create`, {
        item
    })
    return response.data;
}

export const updateItem = async (iid, item) => {
    const response = await api.put(`${URL}/update${iid}`, {
        item
    })
    return response.data;
}

export const deleteItem = async (iid) => {
    const response = await api.delete(`${URL}/delete${iid}`);
    return response.data;
}