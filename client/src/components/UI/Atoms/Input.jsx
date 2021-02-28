import React from 'react';
import styled, { css } from 'styled-components';
import { FiSearch } from 'react-icons/fi';

const InputStyle = styled.input`
  width: 100%;
  padding: 1rem 2rem;

  ${(props) =>
    props.header &&
    css`
      background: #f1f3f5;
      border-radius: 30px;
    `}
`;

const Input = ({ ...rest }) => {
  return <InputStyle {...rest} />;
};

export default Input;
