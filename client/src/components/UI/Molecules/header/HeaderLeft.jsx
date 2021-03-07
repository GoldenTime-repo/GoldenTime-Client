import React from 'react';
import styled from 'styled-components';

import Button from '../../Atoms/Button';
import Image from '../../Atoms/Image';

const HeaderLeftBlock = styled.div`
  flex: 0.5;
`;

const HeaderLeft = () => {
  return (
    <HeaderLeftBlock>
      <Button>
        <Image src="/images/goldenTimeLogo.png" alt="logo" logo />
      </Button>
    </HeaderLeftBlock>
  );
};

export default HeaderLeft;
