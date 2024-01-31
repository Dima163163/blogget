import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postsRequestAsync} from '../store/postsData/postsDataAction';

export const usePostsData = () => {
  const token = useSelector(state => state.token.token);
  const postsData = useSelector(state => state.postsData.data);
  const loading = useSelector(state => state.postsData.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsRequestAsync());
  }, [token]);

  return [postsData, loading];
};
