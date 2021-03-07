import React from 'react';
import styled from 'styled-components';

import CardTop from '../Molecules/card/CardTop';

const CardBlock = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #dbdbdb;
  width: 500px;
`;

const Card = () => {
  return (
    <CardBlock>
      <CardTop />
    </CardBlock>
  );
};

export default Card;
