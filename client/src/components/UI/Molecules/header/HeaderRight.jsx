import React from 'react';
import styled from 'styled-components';

import Paragraph from '../../Atoms/Paragraph';
import Button from '../../Atoms/Button';

const HeaderRIghtBlock = styled.div`
  flex: 1.5;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
`;

const LocationInfo = styled(Paragraph)`
  width: 80%;
  text-align: center;
`;

const HeaderRight = ({ location }) => {
  return (
    <HeaderRIghtBlock>
      <LocationInfo>현재위치는 {location}입니다.</LocationInfo>
      <Button bold>로그인</Button>
    </HeaderRIghtBlock>
  );
};

export default HeaderRight;
