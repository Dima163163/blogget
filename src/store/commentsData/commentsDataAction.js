import axios from 'axios';
import {URL_API} from '../../api/const';

export const COMMENTS_RQUEST = 'COMMENTS_RQUEST';
export const COMMENTS_RQUEST_SUCCESS = 'COMMENTS_RQUEST_SUCCESS';
export const COMMENTS_RQUEST_ERROR = 'COMMENTS_RQUEST_ERROR';

export const commentsRequest = () => ({
  type: COMMENTS_RQUEST,
  error: ''
});

export const commentsRequestSuccess = (data) => ({
  type: COMMENTS_RQUEST_SUCCESS,
  data,
});

export const commentsRequestError = (error) => ({
  type: COMMENTS_RQUEST_ERROR,
  error,
});

export const commentsRequestAsync = (id) => (dispatch, getState) => {
  console.log('commentsID', id);
  const token = getState().token.token;
  if (!token) return;

  dispatch(commentsRequest());
  axios(`${URL_API}/comments/${id}`, {
    headers: {
      Authorization: `bearer ${token}`
    },
  })
    .then(({data:
      [
        {
          data: {
            children: [
              {
                data
              }
            ]
          }
        },
        {
          data: {
            children
          }
        }
      ]
    }) => {
      const comments = children.map(item => item.data);
      const dataArr = [data, comments];
      dispatch(commentsRequestSuccess(dataArr));
    },
    )
    .catch(error => {
      console.error(error);
      dispatch(commentsRequestError(error.message));
    });
};
