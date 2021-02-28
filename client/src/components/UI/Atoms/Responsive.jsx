import React from 'react';
import styled, { css } from 'styled-components';

const ResponsiveBlock = styled.div`
  padding: 0 3rem;
  width: 100%;
  margin: 0 auto;
`;

const Responsive = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
