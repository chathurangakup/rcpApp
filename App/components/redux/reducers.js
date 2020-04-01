import { combineReducers } from 'redux';

import startUpReducer from './StartUp/reducer';
import catelogueReducer from './Catelogue/reducer';
import profileReducer from './Profile/reducer';
import homeReducer from './Home/reducer';
import favouriteReducer from './Favourite/reducer'


export default combineReducers({
  startUpReducer,
  catelogueReducer,
  profileReducer,
  homeReducer,
  favouriteReducer

});