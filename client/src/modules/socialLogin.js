import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRquestSaga';
import * as socialLoginAPI from '../lib/api/socialLogin';
import { takeLatest } from 'redux-saga/effects';

const [
  GOOGLE_LOGIN,
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGIN_FAILURE,
] = createRequestActionTypes('google/GOOGLE_LOGIN');

const [
  KAKAO_LOGIN,
  KAKAO_LOGIN_SUCCESS,
  KAKAO_LOGIN_FAILURE,
] = createRequestActionTypes('kakao/KAKAO_LOGIN');

export const googleLogin = createAction(GOOGLE_LOGIN, (authorizationCode) => ({
  authorizationCode,
}));

export const kakaoLogin = createAction(KAKAO_LOGIN, (authorizationCode) => ({
  authorizationCode,
}));

const googleLoginSaga = createRequestSaga(
  GOOGLE_LOGIN,
  socialLoginAPI.googleOAuthLogin,
);
const kakaoLoginSaga = createRequestSaga(
  KAKAO_LOGIN,
  socialLoginAPI.kakaoOAuthLogin,
);
export function* socialLoginSaga() {
  yield takeLatest(GOOGLE_LOGIN, googleLoginSaga);
  yield takeLatest(KAKAO_LOGIN, kakaoLoginSaga);
}

const initialState = {
  id: null,
  email: null,
  nick: null,
  profileImage: null,
  provider: null,
  area: null,
  createdAt: null,
  errorMessage: null,
};

const socialLoginReducer = handleActions(
  {
    [GOOGLE_LOGIN_SUCCESS]: (state, { payload: userInfo }) => ({
      ...state,
      userInfo,
      errorMessage: null,
    }),
    [GOOGLE_LOGIN_FAILURE]: (state, { payload: errorMessage }) => ({
      ...state,
      errorMessage,
      userInfo: null,
    }),
    [KAKAO_LOGIN_SUCCESS]: (state, { payload: userInfo }) => ({
      ...state,
      userInfo,
      errorMessage: null,
    }),
    [KAKAO_LOGIN_FAILURE]: (state, { payload: errorMessage }) => ({
      ...state,
      errorMessage,
      userInfo: null,
    }),
  },
  initialState,
);

export default socialLoginReducer;
