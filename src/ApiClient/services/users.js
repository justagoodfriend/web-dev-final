import axios from "axios";
//gonna deploy this later
const URL = "http://localhost:8080/api/users";

const api = axios.create({
  baseURL: "http://localhost:8080/api/users",
  withCredentials: true,
});

//probably don't need to destructure in the parameters:
export const register = async ({ username, password, handle }) => {
  const response = await api.post(`${URL}/register`, {
    username,
    password,
    handle,
  });

  const user = response.data;
  return user;
};

export const login = async ({ username, password }) => {
  const response = await api.post(`${URL}/login`, {
    username,
    password,
  });
  const user = response.data;
  return user;
};

export const logout = async () => {
  const response = await api.post(`${URL}/logout`);
  return response.data;
};

export const profile = async () => {
  const response = await api.post(`${URL}/profile`);
  return response.data;
};

/*
   export const updateUser = async (user) => {
    const response = await api.put(`${USERS_URL}/${user._id}`, user);
    return response.data;
   };
   */
