function useRequestAuthorizationCode() {
  const requestGoogleAuthorizationCode = (e) => {
    e.preventDefault();
    const clientId =
      '891242111945-efv2l89nsoh90d25klcre0ko2q44u3j6.apps.googleusercontent.com';
    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=http://localhost:3000&response_type=code&scope=email+profile&state=google${location.pathname}&access_type=offline`;
    window.location.href = url;
  };

  const requestKakaoAuthorizationCode = (e) => {
    e.preventDefault();
    const clientId = 'e8bf60feac8042c48c462ce01edd2e2e';
    const url = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=http://localhost:3000&response_type=code&state=kakao${location.pathname}`;
    window.location.href = url;
  };
  return { requestGoogleAuthorizationCode, requestKakaoAuthorizationCode };
}

export default useRequestAuthorizationCode;
