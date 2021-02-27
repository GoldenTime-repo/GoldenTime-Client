import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  border: none;
  font-size: 1rem;
  padding: 0.25rem 1rem;
  background: inherit;
  color: #000;
  outline: none;
  cursor: pointer;
`;

const Button = ({ children }) => {
  return <ButtonStyle>{children}</ButtonStyle>;
};

export default Button;
