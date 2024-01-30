import axios from 'axios';
import {URL_API} from '../../api/const';

export const POSTS_REQUEST = 'POST_REQUEST';
export const POSTS_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export const POSTS_REQUEST_ERROR = 'POST_REQUEST_ERROR';

export const postsRequest = () => ({
  type: POSTS_REQUEST,
});

export const postsRequestSuccess = (data) => ({
  type: POSTS_REQUEST_SUCCESS,
  data,
});

export const postsRequestError = (error) => ({
  type: POSTS_REQUEST_ERROR,
  error,
});

export const postsRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token;
  console.log('token: ', token);

  if (!token) return;

  dispatch(postsRequest());
  axios(`${URL_API}/best?limit=20`, {
    headers: {
      Authorization: `bearer ${token}`
    },
  })
    .then(({data: {
      data: {
        children
      }
    }}) => dispatch(postsRequestSuccess(children)))
    .catch(error => {
      console.log(error);
      dispatch(postsRequestError(error.message));
    });
};
