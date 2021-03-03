import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { RiKakaoTalkFill } from 'react-icons/ri';

const SearchIcon = styled(FiSearch)`
  position: absolute;
  font-size: 1.75rem;
  color: #adb5bd;
  right: 20px;
  cursor: pointer;
`;

const GoogleLoginIcon = styled(FcGoogle)`
  font-size: 1.75rem;
`;

const KakaoLoginIcon = styled(RiKakaoTalkFill)`
  font-size: 1.75rem;
  border-radius: 50%;
  background: yellow;
`;

const Icons = (props) => {
  if (props.search) {
    return <SearchIcon {...props} />;
  } else if (props.google) {
    return <GoogleLoginIcon {...props} />;
  } else if (props.kakao) {
    return <KakaoLoginIcon />;
  }
};

export default Icons;
