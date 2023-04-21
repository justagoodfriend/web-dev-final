 import * as dao from "./favorites-dao.js";

const favoritesController = (app) => {
    const getFavorites = async (req, res) => {
        console.log("getting all favorites");
        const favorites = await dao.findAllFavorites();
        res.json(favorites);
    }

    const getFavoritesForUser = async (req, res) => {
        console.log("getting favorites for user:", req.params.uid);
        const favorites = await dao.findFavoritesForUser(req.params.uid);
        res.json(favorites);
    }

    const getFavoritesForItem = async (req, res) => {
        console.log("getting favorites for item:", req.params.iid);
        const favorites = await dao.findFavoritesForItem(req.params.iid);
        res.json(favorites);
    }

    const createFavorite = async (req, res) => {
        console.log("creating favorite");
        const newFav = await dao.createFavorite(req.params.uid, req.params.iid);
        res.json(newFav);
    }

    const deleteFavorite = async (req, res) => {
        console.log("deleting favorite");
        const status = await dao.deleteFavorite(req.params.rid);
        res.json(status);
    }

    app.get("/api/favorites", getFavorites);
    app.get("/api/favorites/users/:uid/favorites", getFavoritesForUser);
    app.get("/api/favorites/item/:iid/favorites", getFavoritesForItem);
    app.post("/api/favorites/users/:uid/item/:iid", createFavorite);
    app.delete("/api/favorites/users/;uid/item/:iid", deleteFavorite);
};

export default favoritesController;