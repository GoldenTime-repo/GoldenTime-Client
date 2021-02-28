import React from 'react';
import styled from 'styled-components';

import Input from '../../Atoms/Input';
import Icons from '../../Atoms/Icons';

const SearchFormBlock = styled.div`
  position: relative;
  flex: 3;
  display: flex;
  align-items: center;
  width: 100%;
`;

const SearchForm = () => {
  return (
    <SearchFormBlock>
      <Input type="text" placeholder="찾으시는 상품을 입력하세요." header />
      <Icons search />
    </SearchFormBlock>
  );
};

export default SearchForm;
