import { all } from 'redux-saga/effects';

import startUpSaga from './StartUp/saga';
import catelogueSaga from './Catelogue/saga';
import profileSaga from './Profile/saga';
import homeSaga from './Home/saga';
import favouriteSaga from './Favourite/saga';

export default function* rootSaga() {
  yield all([
    startUpSaga(),
    catelogueSaga(),
    profileSaga(),
    homeSaga(),
    favouriteSaga()
 
  ]);
};