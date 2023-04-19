import {createAsyncThunk} from "@reduxjs/toolkit";
import * as itemService from "./item.js";

export const findItemByIdThunk = createAsyncThunk(
    'details/getItem', async (iid) => {
        const item = await itemService.getItemById(iid)
        return item;
    }
)