//import AsyncStorage from "@react-native-async-storage/async-storage";
import { SET_USER, LOG_OUT_USER } from "../actions/actionTypes";
import * as SecureStore from "expo-secure-store";
/*
let INITIAL_STATE = {
  auth_id: "",
  user_id: "",
  email: "",
  email_verified: false,
  first_name: "",
  last_name: "",
  phone_number: "",
  address: "",
  role: "",
  token: "",
};

export const retrieveUser = async () => {
  try {
    const userObject = await SecureStore.getItemAsync("user");
    if (userObject) {
      const userObject = JSON.parse(userObject);
      console.log("User object retrieved:", userObject);
      // Do something with the retrieved user object
      return userObject;
    }
    return null;
  } catch (error) {
    console.log("Error retrieving user object:", error);
  }
};*/

/*
async function UserReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USER:
      const newUser = { ...state, ...action.payload };
      //console.log("SET_USER ", newUser);
      //const userObject = JSON.stringify(newUser);
      await SecureStore.setItemAsync("user", JSON.stringify(newUser));
      return newUser;
    default:
      return state;
  }
}*/
const initialState = null;

const storeUserInSecureStore = async (user) => {
  try {
    const userString = JSON.stringify(user);
    await SecureStore.setItemAsync("user", userString);
  } catch (error) {
    console.log("Error storing user:", error);
  }
};

const retrieveUserFromSecureStore = async () => {
  try {
    const userString = await SecureStore.getItemAsync("user");
    return userString ? JSON.parse(userString) : null;
  } catch (error) {
    console.log("Error retrieving user:", error);
    return null;
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      storeUserInSecureStore(action.payload);
      return action.payload;
    case LOG_OUT_USER:
      storeUserInSecureStore(action.payload);
      return action.payload;
    default:
      const retrievedUser = retrieveUserFromSecureStore();
      return retrievedUser || state;
  }
};

export default userReducer;
