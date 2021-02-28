import React from 'react';
import styled, { css } from 'styled-components';

const ImgStyle = styled.img`
  ${(props) =>
    props.logo &&
    css`
      width: 150px;
      height: 80px;
    `}
`;

const Img = (props) => {
  return <ImgStyle {...props} />;
};

export default Img;
