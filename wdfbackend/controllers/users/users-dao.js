import userModel from "./users-model.js";

export const findAllUsers = async () => {
  const users = await userModel.find();
  return users;
};

export const findUserById = async (id) => {
  const users = await userModel.findById(id);
  return users;
};

export const findUserByUserName = async (username) => {
  const users = await userModel.findOne({ username });
  return users;
};

export const findUserByCredentials = async (username, password) => {
  const users = await userModel.findOne({ username, password });
  return users;
};

//also will need create buyers/create seller
export const createUser = async (user) => {
  const users = await userModel.create(user);
  return users;
};

export const updateUser = (uid, user) =>
  userModel.updateOne({ _id: uid }, user);

export const deleteUser = (uid) => userModel.deleteOne({ _id: uid });
