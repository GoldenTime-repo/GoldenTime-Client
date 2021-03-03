import React from 'react';
import styled from 'styled-components';

import Image from '../../Atoms/Image';

const ModalHeaderBlock = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin-bottom: 30px;
`;

const LogoImage = styled(Image)`
  width: 250px;
  height: 120px;
`;

const ModalHeader = () => {
  return (
    <ModalHeaderBlock>
      <LogoImage src="/images/goldenTimeLogo.png" alt="logo" />
    </ModalHeaderBlock>
  );
};

export default ModalHeader;
