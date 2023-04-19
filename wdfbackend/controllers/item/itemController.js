import * as dao from "./item-dao.js";

const itemController = (app) => {
    const getItems = async (req, res) => {
        console.log("getting all items");
        const items = await dao.findAllItems();
        res.json(items);
    }

    const getItemsById = async (req, res) => {
        console.log("getting item with id:", req.params.iid);
        const item = await dao.findReviewsBySellerId(req.params.iid);
        res.json(item);
    }

    app.get("/api/details", getItems);
    app.get("/api/details/:iid", getItemsById);
};

export default itemController;