import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loadingReducer from './loading';
import locationReducer, { locationSaga } from './location';
import socialLoginReducer, { socialLoginSaga } from './socialLogin';

const rootReducer = combineReducers({
  loadingReducer,
  locationReducer,
  socialLoginReducer,
});

export function* rootSaga() {
  yield all([locationSaga(), socialLoginSaga()]);
}
export default rootReducer;
