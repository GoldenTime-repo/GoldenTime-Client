import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../modules/goods';

function useGetGoods() {
  const dispatch = useDispatch();

  const { goods, errorMessage } = useSelector(({ goodsReducer }) => {
    return {
      goods: goodsReducer.goods,
      errorMessage: goodsReducer.errorMessage,
    };
  });
  const getGoodsInfo = (area) => {
    dispatch(actions.readGoods({ area }));
  };
  return { goods, errorMessage, getGoodsInfo };
}

export default useGetGoods;
