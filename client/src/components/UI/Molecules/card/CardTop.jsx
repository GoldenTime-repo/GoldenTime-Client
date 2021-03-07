import React from 'react';
import styled from 'styled-components';

import Image from '../../Atoms/Image';

const CardTopBlock = styled.div`
  width: 100%;
  height: 100px;
`;

const CardTop = ({ goods }) => {
  return (
    <CardTopBlock>
      <Image
        src={goods ? goods : '/images/goldenTimeLogo.png'}
        alt="goodsImage"
      />
    </CardTopBlock>
  );
};

export default CardTop;
