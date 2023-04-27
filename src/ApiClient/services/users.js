import axios from "axios";
//gonna deploy this later
const URL = "http://localhost:8080/api/users";

const api = axios.create({
  baseURL: "http://localhost:8080/api/users",
  withCredentials: true,
});

//probably don't need to destructure in the parameters:
export const register = async ({
  username,
  password,
  email,
  items,
  reviews,
  wishlist,
  transactions,
  image,
}) => {
  const response = await api.post(`${URL}/register`, {
    username,
    password,
    email,
    items,
    reviews,
    wishlist,
    transactions,
    image
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

export const updateUser = async({  
  username,
  password,
  email,
  items,
  reviews,
  wishlist,
  transactions,
  image
}) => {
  const response = await api.put(`${URL}`, {
    username,
    password,
    email,
    items,
    reviews,
    wishlist,
    transactions,
    image
  });
  return response.data
}

export const logout = async () => {
  const response = await api.post(`${URL}/logout`);
  return response.data;
};

export const profile = async () => {
  const response = await api.post(`${URL}/profile`);
  return response.data;
};

export const findProfile = async (userID) => {
  console.log("reached userService with Query for ID: " + userID);
  const filepath = `${URL}/profile/${userID}`;
  console.log("Sending this get req: "+ filepath);
  const response = await api.get(`${URL}/profile/${userID}`);
  return response.data;
}

export const updateLikes = async (goodsId) => {
  const response = await api.put(`${URL}/profile/likes${goodsId}`);
  return response.data;
};

/*
   export const updateUser = async (user) => {
    const response = await api.put(`${USERS_URL}/${user._id}`, user);
    return response.data;
   };
   */
