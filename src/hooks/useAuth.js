import {useState, useEffect} from 'react';
import {URL_API} from '../api/const';

export const useAuth = (state, token, delToken) => {
  const [auth, setAuth] = useState(state);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch(error => {
        console.log(error);
        setAuth({});
        delToken();
      });
  }, [token]);

  return [auth, setAuth];
};
