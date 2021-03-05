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

const ModalFooter = ({ type, handleTypeChange }) => {
  return (
    <ModalFooterBlock>
      <FormTypeButtonBlock>
        <Paragraph>
          {type === 'login'
            ? '아직 회원이 아니신가요?'
            : '계정이 이미 있으신가요?'}
        </Paragraph>
        <ButtonStyle onClick={handleTypeChange} softly>
          {type === 'login' ? '회원가입' : '로그인'}
        </ButtonStyle>
      </FormTypeButtonBlock>
    </ModalFooterBlock>
  );
};

export default ModalFooter;
