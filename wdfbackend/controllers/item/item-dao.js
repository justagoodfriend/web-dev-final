import itemModel from "./item-model.js";

export const findAllItems = async () => {
    const items = await itemModel.find();
    return items;
};

export const findReviewsBySellerId = async (sellerId) => {
    const item = await itemModel.findById({ sellerId });
    return item;
};

