import {useState, useEffect} from 'react';
import {URL_API} from '../api/const';

export const useBestPosts = () => {
  const [bestPosts, setBestPost] = useState([]);

  useEffect(() => {
    fetch(`${URL_API}/best.json`)
      .then(response => response.json())
      .then(data => setBestPost(data.data.children))
      .catch(error => {
        console.log(error);
      });
  }, []);

  return [bestPosts];
};
