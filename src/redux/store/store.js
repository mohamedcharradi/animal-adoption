import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
//import { PersistGate } from "redux-persist/integration/react";
import { persistStore, persistReducer } from "redux-persist";
//import { AsyncStorage } from "react-native";
import userReducer from "../reducers/userReducer";
//import { setUser } from "../actions/userAction";
import AsyncStorage from "@react-native-async-storage/async-storage";

// persist config
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

// wrap persist API around root reducer and store
//const persistedReducer = persistReducer(persistConfig, rootReducer);
const persistedReducer = persistReducer(persistConfig, userReducer);

// create store
const loggerMiddleware = createLogger();
export const store = //persistStore(
  createStore(userReducer, applyMiddleware(loggerMiddleware));
//);

//store.dispatch({ type: "SET_RETRIEVED_USER" });
//export const persistor = persistStore(store);
