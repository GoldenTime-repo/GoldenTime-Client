import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import Button from './Button';

const HeaderBlock = styled.header`
  position: fixed;
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const HeaderLeft = styled.div`
  flex: 1;
  img {
    width: 150px;
    height: 80px;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  flex: 1.5;

  p {
    width: 80%;
    text-align: center;
  }
`;

const SearchBlock = styled.div`
  position: relative;
  flex: 3;
  display: flex;
  align-items: center;
  width: 100%;
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  font-size: 1.75rem;
  color: #adb5bd;
  right: 20px;
  cursor: pointer;
`;

const InputStyle = styled.input`
  width: 100%;
  padding: 1rem 3rem 1rem 2rem;
  background: #f1f3f5;
  border-radius: 30px;
`;

const Spacer = styled.div`
  height: 6rem;
`;

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <HeaderLeft>
          <Link to="/">
            <img src="/images/goldenTimeLogo.png" alt="logo" />
          </Link>
        </HeaderLeft>
        <SearchBlock>
          <InputStyle type="text" placeholder="찾으시는 상품을 입력하세요." />
          <SearchIcon />
        </SearchBlock>
        <HeaderRight>
          <p>위치정보</p>
          <Button>로그인</Button>
        </HeaderRight>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
