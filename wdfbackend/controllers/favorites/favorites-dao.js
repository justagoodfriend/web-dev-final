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

export const createFavorite = async (userId, itemId) => {
    const newFav = await favoritesModel.create({userId, itemId});
    return newFav;
}

export const deleteFavorite = async (lid) => {
    const status = await favoritesModel.deleteOne({ _id: lid });
    return status;
}

