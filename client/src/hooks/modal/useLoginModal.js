import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function useLoginModal() {
  const [modal, setModal] = useState(false);
  const [type, setType] = useState('login');

  const dispatch = useDispatch();

  const onModal = () => {
    setModal(!modal);
  };

  const handleTypeChange = () => {
    setType(type === 'login' ? 'register' : 'login');
  };

  return { modal, onModal, type, handleTypeChange };
}

export default useLoginModal;
