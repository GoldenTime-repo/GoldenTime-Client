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

const LoginModal = () => {
  return (
    <WhiteBox>
      <ModalHeader />
      <ModalForm />
      <ModalFooter />
    </WhiteBox>
  );
};

export default LoginModal;
