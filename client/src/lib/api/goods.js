import { client } from './client';

export const readGoods = ({ area }) =>
  client.post('http://localhost:8080/goods/', area, { withCredentials: true });
