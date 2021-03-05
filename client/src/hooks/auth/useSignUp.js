import { useDispatch, useDIspatch } from 'react-redux';

function useSignUp() {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return { handleChange };
}

export default useSignUp;
