import * as dao from "./favorites-dao.js";
import * as itemDao from "../item/item-dao.js";

const favoritesController = (app) => {
  const getFavorites = async (req, res) => {
    console.log("getting all favorites");
    const favorites = await dao.findAllFavorites();
    res.json(favorites);
  };

  //when viewing profiles of other users, would be necessary to view this information
  const getFavoritesForUser = async (req, res) => {
    console.log("getting favorites for user:", req.params.uid);
    const favorites = await dao.findFavoritesForUser(req.params.uid);
    res.json(favorites);
  };

  const getFavoritesForItem = async (req, res) => {
    console.log("getting favorites for item:", req.params.iid);
    const favorites = await dao.findFavoritesForItem(req.params.iid);
    res.json(favorites);
  };

  const createFavorite = async (req, res) => {
    console.log("creating favorite");
    const newFav = await dao.createFavorite(req.params.uid, req.params.iid);
    //maybe need an item?
    //check if itemID already exists within DB -> create a new item under this schema:
    const item = await itemDao.findItemByItemId(req.params.iid);
    if (!item) {
      itemDao.createItem(req.body);
    }
    res.json(newFav);
  };

  const getItemandUser = async (req, res) => {
    console.log("Searching for item and user got called");
    const potentialFavorite = await dao.findFavoritesForItemandUser(
      req.params.uid,
      req.params.iid
    );
    console.log(
      "incoming parameters: " + req.params.uid + " " + req.params.iid
    );
    console.log(potentialFavorite);
    res.json(potentialFavorite);
  };

  const deleteFavorite = async (req, res) => {
    console.log("deleting favorite");
    const status = await dao.deleteFavorite(req.params.uid, req.params.iid);
    res.json(status);
  };

  //would only be allowed to favorite if logged in, so I don't think the iid is necessary
  app.get("/api/favorites", getFavorites);
  //TODO: change to use the current
  app.get("/api/favorites/users/:uid/favorites", getFavoritesForUser);
  app.get("/api/favorites/item/:iid/favorites", getFavoritesForItem);
  app.post("/api/favorites/users/:uid/item/:iid", createFavorite);
  app.get("/api/favorites/users/:uid/item/:iid", getItemandUser);
  app.delete("/api/favorites/users/:uid/item/:iid", deleteFavorite);
};

export default favoritesController;
