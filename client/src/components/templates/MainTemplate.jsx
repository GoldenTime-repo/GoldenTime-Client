import React from 'react';
import styled from 'styled-components';

import Header from '../UI/organisms/Header';
import LoginModal from '../UI/organisms/LoginModal';

const FullScreen = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 30;
`;

const modal = true;
const MainTemplate = ({
  location,
  google,
  kakao,
  modal,
  onModal,
  type,
  handleTypeChange,
}) => {
  return (
    <>
      <Header location={location} onModal={onModal} />
      {modal && (
        <FullScreen>
          <LoginModal
            google={google}
            kakao={kakao}
            type={type}
            handleTypeChange={handleTypeChange}
          ></LoginModal>
        </FullScreen>
      )}
    </>
  );
};

export default MainTemplate;
