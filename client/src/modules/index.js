import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loadingReducer from './loading';
import locationReducer, { locationSaga } from './location';

const rootReducer = combineReducers({
  loadingReducer,
  locationReducer,
});

export function* rootSaga() {
  yield all([locationSaga()]);
}
export default rootReducer;
