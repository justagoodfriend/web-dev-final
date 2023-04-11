import { configureStore } from '@reduxjs/toolkit'
import profilesDBReducer from '../reducers/profile-db-reducer';
import profileReducer from '../reducers/profile-reducer';

const Store = configureStore({ 
    reducer: {
        profile: profileReducer,
        profilesDB: profilesDBReducer
    }
});


export default Store;