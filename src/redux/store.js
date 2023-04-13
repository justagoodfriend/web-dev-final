import { configureStore } from "@reduxjs/toolkit";
import profilesDBReducer from "../reducers/profile-db-reducer";
import profileReducer from "../reducers/profile-reducer";
import usersReducer from "./users-reducer";

const Store = configureStore({
  reducer: {
    profile: profileReducer,
    profilesDB: profilesDBReducer,
    users: usersReducer,
  },
});

export default Store;
