import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const styleButton = css`
  border: none;
  font-size: 1rem;
  padding: 0.25rem 1rem;
  background: inherit;
  outline: none;
  cursor: pointer;

  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}
`;

const LinkStyle = styled(Link)`
  ${styleButton};
`;

const ButtonStyle = styled.button`
  ${styleButton};
`;

const Button = (props) => {
  return props.to ? <LinkStyle {...props} /> : <ButtonStyle {...props} />;
};

export default Button;
