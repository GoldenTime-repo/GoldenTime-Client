import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import MainTemplate from '../templates/MainTemplate';
import useGetLocation from '../../hooks/location/useGetLocation';
import useLoginModal from '../../hooks/modal/useLoginModal';
import useRequestAuthorizationCode from '../../hooks/auth/useRequestAuthorizationCode';
import useSocialLogin from '../../hooks/auth/useSocialLogin';

const MainPages = ({ history }) => {
  const { location, errorMessage, getLocation } = useGetLocation();
  const { modal, onModal, type, handleTypeChange } = useLoginModal();
  const {
    requestGoogleAuthorizationCode,
    requestKakaoAuthorizationCode,
  } = useRequestAuthorizationCode();
  const { googleLogin, kakaoLogin } = useSocialLogin();

  const handleSocialLogin = () => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');
    const state = url.searchParams.get('state');
    if (authorizationCode && state) {
      const loginState = state.split('/');
      switch (loginState[0]) {
        case 'google':
          googleLogin(authorizationCode);
          history.push(`/${loginState[1]}`);
          break;
        case 'kakao':
          kakaoLogin(authorizationCode);
          history.push(`/${loginState[1]}`);
          break;
      }
    }
  };

  useEffect(() => {
    getLocation();
  }, [location, errorMessage]);

  useEffect(() => {
    handleSocialLogin();
  }, [location]);
  return (
    <MainTemplate
      location={location}
      modal={modal}
      onModal={onModal}
      type={type}
      handleTypeChange={handleTypeChange}
      google={requestGoogleAuthorizationCode}
      kakao={requestKakaoAuthorizationCode}
    />
  );
};

export default withRouter(MainPages);
