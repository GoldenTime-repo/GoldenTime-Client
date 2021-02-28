import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

const SearchIcon = styled(FiSearch)`
  position: absolute;
  font-size: 1.75rem;
  color: #adb5bd;
  right: 20px;
  cursor: pointer;
`;

const Icons = (props) => {
  if (props.search) {
    return <SearchIcon {...props} />;
  }
};

export default Icons;
