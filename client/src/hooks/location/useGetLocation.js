import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../modules/location';

function useGetLocation() {
  const dispatch = useDispatch();

  const { location, errorMessage } = useSelector(({ locationReducer }) => {
    return {
      location: locationReducer.location,
      errorMessage: locationReducer.errorMessage,
    };
  });

  const getLocation = () => {
    window.navigator.geolocation.getCurrentPosition(async (position) => {
      const x = position.coords.longitude;
      const y = position.coords.latitude;
      dispatch(action.readLocation(x, y));
    });
  };

  return { location, errorMessage, getLocation };
}

export default useGetLocation;
