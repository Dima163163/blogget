import {useState, useEffect} from 'react';
import {URL_API} from '../api/const';

export const useCommentsData = (id, subreddit) => {
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${URL_API}/r/${subreddit}/comments/${id}.json`)
      .then(response => response.json())
      .then(data => {
        setComments((data[1].data.children));
        setPost(data[0].data.children[0].data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return [comments, post, loading];
};
