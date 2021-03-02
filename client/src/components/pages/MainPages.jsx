import React, { useEffect } from 'react';

import MainTemplate from '../templates/MainTemplate';
import useGetLocation from '../../hooks/location/useGetLocation';

const MainPages = () => {
  const { location, errorMessage, getLocation } = useGetLocation();
  useEffect(() => {
    getLocation();
  }, [location, errorMessage]);
  return <MainTemplate location={location} />;
};

export default MainPages;
