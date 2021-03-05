import { client } from './client';

export const googleOAuthLogin = ({ authorizationCode }) => {
  return client.post('http://localhost:8080/auth/google', authorizationCode, {
    withCredentials: true,
  });
};

export const kakaoOAuthLogin = ({ authorizationCode }) => {
  return client.post('http://localhost:8080/auth/kakao', authorizationCode, {
    withCredentials: true,
  });
};
