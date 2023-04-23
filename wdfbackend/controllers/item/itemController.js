import * as dao from "./item-dao.js";

const itemController = (app) => {
    const getItems = async (req, res) => {
        console.log("getting all items");
        const items = await dao.findAllItems();
        res.json(items);
    }

    const getItemById = async (req, res) => {
        console.log("getting item with id:", req.params.iid);
        const item = await dao.findItemByItemId(req.params.iid);
        res.json(item);
    }

    const createItem = async (req, res) => {
        console.log("creating item");
        const newItem = await dao.createItem(req.body);
        res.json(newItem);
    }

    const updateItem = async (req, res) => {
        console.log("updating item");
        const status = await dao.updateItem(req.params.rid, req.body);
        res.json(status);
    }

    const deleteItem = async (req, res) => {
        console.log("deleting item");
        const status = await dao.deleteItem(req.params.rid);
        res.json(status);
    }

    app.get("/api/details", getItems);
    app.get("/api/details/:iid", getItemById);
    app.post("/api/details/create", createItem);
    app.put("/api/update/:iid", updateItem);
    app.delete("/api/delete/:iid", deleteItem);
};

export default itemController;