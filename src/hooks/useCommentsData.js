import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {commentsRequestAsync} from '../store/commentsData/commentsDataAction';

export const useCommentsData = (id) => {
  const postData = useSelector(state => state.comments.post);
  const commentsData = useSelector(state => state.comments.comments);
  const status = useSelector(state => state.comments.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commentsRequestAsync(id));
  }, [id]);

  return [postData, commentsData, status];
};
