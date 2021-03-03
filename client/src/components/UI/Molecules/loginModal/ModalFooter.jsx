import React from 'react';
import styled from 'styled-components';

import Paragraph from '../../Atoms/Paragraph';
import Button from '../../Atoms/Button';

const ModalFooterBlock = styled.div`
  display: flex;
  flex: 0.5;
  width: 100%;
  margin-top: 20px;
`;

const FormTypeButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
`;

const ButtonStyle = styled(Button)`
  padding: 0;
  margin-left: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const type = 'login';
const ModalFooter = () => {
  return (
    <ModalFooterBlock>
      <FormTypeButtonBlock>
        <Paragraph>아직 회원이 아니신가요?</Paragraph>
        <ButtonStyle softly>회원가입</ButtonStyle>
      </FormTypeButtonBlock>
    </ModalFooterBlock>
  );
};

export default ModalFooter;
