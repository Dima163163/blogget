import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postsRequestAsync} from '../store/postsData/postsDataAction';

export const usePostsData = (page) => {
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();
  const {posts, loading, isLast} = useSelector(state => state.posts);

  useEffect(() => {
    if (!page || !token) return;
    dispatch(postsRequestAsync(page));
  }, [page]);

  return [posts, loading, isLast];
};
