import React from 'react';
import styled from 'styled-components';

import Input from '../../Atoms/Input';
import Button from '../../Atoms/Button';
import Icons from '../../Atoms/Icons';

const ModalFormBlock = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const InputStyle = styled(Input)`
  border-bottom: 1px solid rgb(235, 235, 235);
  padding: 1rem 0;
  font-size: 15px;
  margin-bottom: 10px;
  &:focus {
    border-bottom-color: #868e96;
  }
`;

const ButtonStyle = styled(Button)`
  padding: 1rem 0;
  border-radius: 10px;
  margin: 20px 0;
`;

const SocialLabel = styled.fieldset`
  display: flex;
  text-align: center;
  justify-content: center;
  border: 1px solid #868e96;
  border-bottom: 0;
  border-left: 0;
  border-right: 0;
  width: 100%;
  legend {
    padding: 0 20px;
    color: #868e96;
    margin-bottom: 20px;
  }
`;

const type = 'login';
const ModalForm = ({ google, kakao, type }) => {
  return (
    <ModalFormBlock>
      <form>
        {type === 'login' ? (
          <>
            <InputStyle type="email" placeholder="이메일" />
            <InputStyle type="password" placeholder="비밀번호" />
            <ButtonStyle fullWidth black bold>
              로그인
            </ButtonStyle>
            <SocialLabel>
              <legend>소셜 로그인</legend>
              <Button onClick={(e) => google(e)}>
                <Icons google={'true'} />
              </Button>
              <Button onClick={(e) => kakao(e)}>
                <Icons kakao={'true'} />
              </Button>
            </SocialLabel>
          </>
        ) : (
          <>
            <label>이메일</label>
            <InputStyle type="email" placeholder="예) goldentime@gmail.com" />
            <label>닉네임</label>
            <InputStyle
              type="text"
              placeholder="사용하실 닉네임을 입력해주세요."
            />
            <label>비밀번호</label>
            <InputStyle
              type="password"
              placeholder="8~20자리 사이 영어와 숫자조합"
            />
            <label>비밀번호 확인</label>
            <InputStyle
              type="password"
              placeholder="비밀번호를 한번 더 입력해주세요."
            />
            <ButtonStyle fullWidth black bold>
              회원가입
            </ButtonStyle>
          </>
        )}
      </form>
    </ModalFormBlock>
  );
};

export default ModalForm;
