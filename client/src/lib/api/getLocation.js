import { client } from './client';

export const readLocation = ({ currentLocation: { x, y } }) =>
  client.get(
    `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${x}&y=${y}`,
    {
      headers: {
        Authorization: `KakaoAK ffb53639ffe1e1521cd3006a5a09ee3d`,
      },
    },
  );
