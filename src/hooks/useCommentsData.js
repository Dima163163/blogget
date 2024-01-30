import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {commentsRequestAsync} from '../store/commentsData/commentsDataAction';

export const useCommentsData = (id) => {
  const postData = useSelector(state => state.commentsData.data[0]);
  const commentsData = useSelector(state => state.commentsData.data[1]);
  const status = useSelector(state => state.commentsData.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commentsRequestAsync(id));
  }, [id]);

  return [postData, commentsData, status];
};
