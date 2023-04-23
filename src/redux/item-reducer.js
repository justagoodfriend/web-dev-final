import {createSlice} from "@reduxjs/toolkit";
import {
    findProductByGoodsIdThunk,
    findProductsThunk,
    findItemByIdThunk,
    findItemsThunk,
    createItemThunk,
    updateItemThunk,
    deleteItemThunk
} from "../ApiClient/thunks/itemThunk.js";
import {createReviewThunk, deleteReviewThunk, updateReviewThunk} from "../ApiClient/thunks/reviewsThunk";

const initialState = {
    items: [],
    details: {},
    loading: false
};

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    extraReducers: {
        [findProductByGoodsIdThunk.pending]:
            (state) => {
                state.loading = true
                state.items = []
            },
        [findProductByGoodsIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.items = payload
            },
        [findProductByGoodsIdThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [findProductsThunk.pending]:
            (state) => {
                state.loading = true
                state.items = []
            },
        [findProductsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.items = payload
            },
        [findProductsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [findItemsThunk.pending]:
            (state) => {
                state.loading = true
                state.items = []
            },
        [findItemsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.items = payload
            },
        [findItemsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.items = action.error
            },
        [findItemByIdThunk.pending]:
            (state) => {
                state.loading = true
                state.items = []
            },
        [findItemByIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.items = payload
            },
        [findItemByIdThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.items = action.error
            },
        [deleteItemThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.items = state.items
                    .filter(i => i._id !== payload)
            },
        [createItemThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.items.push(payload)
            },
        [updateItemThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const itemNdx = state.items
                    .findIndex((t) => t._id === payload._id)
                state.items[itemNdx] = {
                    ...state.reviews[itemNdx],
                    ...payload
                }
            }
    },
    reducers: { }
})

export default itemsSlice.reducer;