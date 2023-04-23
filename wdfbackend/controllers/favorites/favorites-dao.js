import favoritesModel from "./favorites-model.js";

export const findAllFavorites = async () => {
  const favorites = await favoritesModel.find();
  return favorites;
};

export const findFavoritesForUser = async (userId) => {
  const favorites = await favoritesModel.findById({ userId });
  return favorites;
};

export const findFavoritesForItem = async (itemId) => {
  const favorites = await favoritesModel.findById({ itemId });
  return favorites;
};

export const findFavoritesForItemandUser = async (userId, itemId) => {
  const favorites = await favoritesModel.findOne({ userId, itemId });
  return favorites;
};

export const createFavorite = async (userId, itemId) => {
  const newFav = await favoritesModel.create({ userId, itemId });
  return newFav;
};

export const deleteFavorite = async (userId, itemId) => {
  const status = await favoritesModel.deleteOne({ userId, itemId });
  return status;
};
