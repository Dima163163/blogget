import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postsRequestAsync} from '../store/postsData/postsDataAction';

export const useBestPosts = () => {
  const token = useSelector(state => state.token.token);
  const postsData = useSelector(state => state.postsData.data);
  console.log('postsData: ', postsData);
  const loading = useSelector(state => state.postsData.loading);
  console.log('status: ', status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsRequestAsync());
  }, [token]);

  return [postsData, loading];
};
