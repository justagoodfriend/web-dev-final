import {createAsyncThunk} from "@reduxjs/toolkit";
import * as itemService from "../services/item.js";
import querySearchByGoodsID from "../../search-page-components/shien-queries-goodsId";
import querySearch from "../../search-page-components/shein-service";

export const findProductByGoodsIdThunk = createAsyncThunk(
    'findProductByGoodsId',
    async (goods_id) => {
        const results = await querySearchByGoodsID(goods_id)
        return results;
    }
)

export const findProductsThunk = createAsyncThunk(
    'findProducts',
    async (query, limit) => {
        const results = querySearch(query, limit)
        return results;
    }
)

export const findItemByIdThunk = createAsyncThunk(
    'details/getItem', async (iid) => {
        console.log("in thunk with", iid);
        const item = await itemService.getItemById(iid)
        return item;
    }
)

export const findItemsThunk = createAsyncThunk(
    'details/getItems', async() => {
        const items = await itemService.getItems();
        return items;
    }
)

export const createItemThunk = createAsyncThunk(
    'details/createItem', async(item) => {
        const newItem = await itemService.createItem(item);
        return newItem;
    }
)

export const updateItemThunk = createAsyncThunk(
    'details/updateItem', async(iid, item) => {
        const newItem = await itemService.updateItem(iid, item);
        return newItem;
    }
)

export const deleteItemThunk = createAsyncThunk(
    'details/deleteItem', async(iid) => {
        await itemService.deleteItem(iid);
        return iid;
    }
)