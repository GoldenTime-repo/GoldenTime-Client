import React from 'react';
import styled from 'styled-components';

import Responsive from '../Atoms/Responsive';
import HeaderLeft from '../Molecules/header/HeaderLeft';
import SearchForm from '../Molecules/header/SearchForm';
import HeaderRight from '../Molecules/header/HeaderRight';

const HeaderBlock = styled.header`
  width: 100%;
`;

const Wrapper = styled(Responsive)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = ({ location, onModal }) => {
  return (
    <HeaderBlock>
      <Wrapper>
        <HeaderLeft />
        <SearchForm />
        <HeaderRight location={location} onModal={onModal} />
      </Wrapper>
    </HeaderBlock>
  );
};

export default Header;
