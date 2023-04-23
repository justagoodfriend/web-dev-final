import { configureStore } from "@reduxjs/toolkit";
import profilesDBReducer from "../reducers/profile-db-reducer";
import profileReducer from "../reducers/profile-reducer";
import usersReducer from "./users-reducer";
import reviewsReducer from "./reviews-reducer";
import favoritesReducer from "./favorites-reducer";
import itemsReducer from "./item-reducer.js";

const Store = configureStore({
  reducer: {
    profile: profileReducer,
    profilesDB: profilesDBReducer,
    users: usersReducer,
    reviews: reviewsReducer,
    items: itemsReducer,
    favorites: favoritesReducer,
  },
});

export default Store;
