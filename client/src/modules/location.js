import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRquestSaga';
import * as locationAPI from '../lib/api/getLocation';
import { takeLatest } from 'redux-saga/effects';

const [
  READ_LOCATION,
  READ_LOCATION_SUCCESS,
  READ_LOCATION_FAILURE,
] = createRequestActionTypes('location/READ_LOCATION');

export const readLocation = createAction(READ_LOCATION, (x, y) => ({
  currentLocation: { x, y },
}));

const readLocationSaga = createRequestSaga(
  READ_LOCATION,
  locationAPI.readLocation,
);
export function* locationSaga() {
  yield takeLatest(READ_LOCATION, readLocationSaga);
}

const initialState = {
  location: null,
  errorMessage: null,
};

const locationReducer = handleActions(
  {
    [READ_LOCATION_SUCCESS]: (state, { payload: location }) => ({
      ...state,
      location: location.documents[0].address.region_2depth_name,
      errorMessage: null,
    }),
    [READ_LOCATION_FAILURE]: (state, { payload: errorMessage }) => ({
      ...state,
      location: null,
      errorMessage,
    }),
  },
  initialState,
);

export default locationReducer;
