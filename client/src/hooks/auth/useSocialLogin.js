import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../modules/socialLogin';

function useSocialLogin() {
  const dispatch = useDispatch();

  const googleLogin = (authorizationCode) => {
    dispatch(action.googleLogin({ authorizationCode }));
  };
  const kakaoLogin = (authorizationCode) => {
    dispatch(action.kakaoLogin({ authorizationCode }));
  };

  return { googleLogin, kakaoLogin };
}

export default useSocialLogin;
