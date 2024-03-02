import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import { FLUSH, REHYDRATE, PERSIST, PURGE, REGISTER, PAUSE } from 'redux-persist/es/constants';
import  userSlice from "./slice/userSlice";

const userPersistConfig = { key: "userAuth", storage, version: 1 };

const userPersistReducer = persistReducer(userPersistConfig, userSlice.reducer);

const middlewareConfig = {
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
};

export const store = configureStore({
    reducer: {
        user: userPersistReducer 
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(middlewareConfig)
});

export const persistor = persistStore(store);


// The store is not being used in this app as it's not required according to the assignment statements. 
