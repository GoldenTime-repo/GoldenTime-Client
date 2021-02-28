import React from 'react';
import styled from 'styled-components';

import Image from '../../Atoms/Image';

const HeaderLeftBlock = styled.div`
  flex: 0.5;
`;

const HeaderLeft = () => {
  return (
    <HeaderLeftBlock>
      <Image src="/images/goldenTimeLogo.png" alt="logo" logo />
    </HeaderLeftBlock>
  );
};

export default HeaderLeft;
