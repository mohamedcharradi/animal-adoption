import {combineReducers} from 'redux';
import UserReducer from './userReducer';
import LoaderReducer from './loaderReducer';

export default combineReducers({
  user: UserReducer,
  loader: LoaderReducer,
});
