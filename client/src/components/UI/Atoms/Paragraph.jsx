import React from 'react';
import styled from 'styled-components';

const ParagraphStyle = styled.p``;

const Paragraph = ({ children, ...rest }) => {
  return <ParagraphStyle {...rest}>{children}</ParagraphStyle>;
};

export default Paragraph;
