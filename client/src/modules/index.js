import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loadingReducer from './loading';
import locationReducer, { locationSaga } from './location';
import socialLoginReducer, { socialLoginSaga } from './socialLogin';
import goodsReducer, { goodsSaga } from './goods';

const rootReducer = combineReducers({
  loadingReducer,
  locationReducer,
  socialLoginReducer,
  goodsReducer,
});

export function* rootSaga() {
  yield all([locationSaga(), socialLoginSaga(), goodsSaga()]);
}
export default rootReducer;
