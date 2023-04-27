import { ObjectId } from "mongodb";
import itemModel from "./item-model.js";

export const findAllItems = async () => {
  const items = await itemModel.find();
  return items;
};

export const findItemByItemId = async (itemId) => {
  const item = await itemModel.findOne({ itemId });
  return item;
};

export const findItemsBySellerID = async (sellerID) => {
  //{author: new ObjectId(userId)}
  const item = await itemModel.find({ sellerId: new ObjectId(sellerID) });
  return item;
};

export const createItem = async (item) => {
  // console.log("test", item);
  const newItem = await itemModel.create(item);
  return newItem;
};

export const updateItem = async (iid, item) => {
  const items = await itemModel.updateOne({ _id: iid }, { $set: item });
  return items;
};

export const deleteItem = async (iid) => {
  const items = await itemModel.deleteOne({ _id: iid });
  return items;
};
