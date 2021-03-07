import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRquestSaga';
import * as goodsAPI from '../lib/api/goods';
import { takeLatest } from 'redux-saga/effects';

const [
  READ_GOODS,
  READ_GOODS_SUCCESS,
  READ_GOODS_FAILURE,
] = createRequestActionTypes('goods/READ_GOODS');

export const readGoods = createAction(READ_GOODS, (area) => ({
  area,
}));

const readGoodsSaga = createRequestSaga(READ_GOODS, goodsAPI.readGoods);

export function* goodsSaga() {
  yield takeLatest(READ_GOODS, readGoodsSaga);
}

const initialState = {
  goods: [
    {
      id: null,
      title: null,
      text: null,
      price: null,
      bidPrice: null,
      thumbnail: null,
      closing_time: null,
      categoryId: null,
      createdAt: null,
    },
  ],
  errorMessage: null,
};

const goodsReducer = handleActions(
  {
    [READ_GOODS_SUCCESS]: (state, { payload: goods }) => ({
      ...state,
      goods,
      errorMesage: null,
    }),
    [READ_GOODS_FAILURE]: (state, { payload: errorMessage }) => ({
      ...state,
      errorMessage,
      goods: null,
    }),
  },
  initialState,
);

export default goodsReducer;
