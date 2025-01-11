import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage"


const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"], // Persist only the user slice
  };
  
  const persistedUserReducer = persistReducer(persistConfig, userReducer);

const appStore = configureStore({
    reducer: {
        user : persistedUserReducer,
        movies : moviesReducer,
        gpt : gptReducer,
        config : configReducer,
    },
});

export const persistor = persistStore(appStore);
export default appStore;