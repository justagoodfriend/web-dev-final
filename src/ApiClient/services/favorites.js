import axios from "axios";
const URL = "http://localhost:8080/api/favorites";

const api = axios.create({
  baseURL: "http://localhost:8080/api/favorites",
});

export const getFavoritesByUserId = async (uid) => {
  console.log("in this method: " + uid);
  const response = await api.get(`${URL}/users/${uid}/favorites`);
  return response.data;
};

export const getFavoritesByItemId = async ({ iid }) => {
  const response = await api.get(`${URL}/item/${iid}/favorites`);
  return response.data;
};

export const getFavorites = async () => {
  const response = await api.get(`${URL}`);
  return response.data;
};

export const getFavoritesOfUserAndID = async (item) => {
  console.log("this method was called");
  const userId = item["uid"];
  const itemId = item["iid"];
  const response = await api.get(`${URL}/users/${userId}/item/${itemId}`);
  //console.log("calling the db");
  //console.log(response.data);
  return response.data;
};

export const createFavorite = async (item) => {
  const userId = item["uid"];
  const itemId = item["iid"];

  const requestBody = item;
  delete requestBody["uid"];
  delete requestBody["iid"];

  //huh why does this work:
  console.log(requestBody);

  const response = await api.post(
    `${URL}/users/${userId}/item/${itemId}`,
    requestBody
  );
  //console.log(response.data);
  return response.data;
};

export const deleteFavorite = async (item) => {
  const userId = item["uid"];
  const itemId = item["iid"];
  const response = await api.delete(`${URL}/users/${userId}/item/${itemId}`);
  return response.data;
};
