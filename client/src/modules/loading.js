import { createStore } from 'redux';
import { createAction, handleActions } from 'redux-actions';

export const START_LOADING = `loading/START_LOADING`;
export const FINISH_LOCADING = `loading/FINISH_LOADING`;

export const startLoading = createAction(
  START_LOADING,
  (requestType) => requestType,
);

export const finishLoading = createAction(
  FINISH_LOCADING,
  (requestType) => requestType,
);

const initialState = {};

const loadingReducer = handleActions(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    [FINISH_LOCADING]: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
  initialState,
);

export default loadingReducer;
