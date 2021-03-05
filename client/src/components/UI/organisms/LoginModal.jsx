import React from 'react';
import styled from 'styled-components';

import ModalHeader from '../Molecules/loginModal/ModalHeader';
import ModalForm from '../Molecules/loginModal/ModalForm';
import ModalFooter from '../Molecules/loginModal/ModalFooter';

const WhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 32rem;
  height: 40rem;
  padding: 3rem;
  background: #fff;
  border-radius: 10px;
`;

const LoginModal = ({ google, kakao, type, handleTypeChange }) => {
  return (
    <WhiteBox>
      <ModalHeader />
      <ModalForm google={google} kakao={kakao} type={type} />
      <ModalFooter type={type} handleTypeChange={handleTypeChange} />
    </WhiteBox>
  );
};

export default LoginModal;
