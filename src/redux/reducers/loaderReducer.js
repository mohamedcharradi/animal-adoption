import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOGGLE_LOADER, USER_LOGGED_OUT} from '../actions/actionTypes';

const INITIAL_STATE = {
  loaderVisibility: false,
};

function LoaderReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    //USER SIGNUP
    case TOGGLE_LOADER:
      return {...state, loaderVisibility: action.payload};
    case USER_LOGGED_OUT:
      AsyncStorage.removeItem('persist:root'); // clean redux persist store
      state = {}; // this will initialize the global state
      return state;
    default:
      return state;
  }
}
export default LoaderReducer;
