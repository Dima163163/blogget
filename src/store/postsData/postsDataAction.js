import axios from 'axios';
import {URL_API} from '../../api/const';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchPostPage, fetchPostPageAfter} from './postsSlice';


export const postsRequestAsync = createAsyncThunk(
  'posts/fetch', (page, {dispatch, getState}) => {
    const token = getState().token.token;
    const after = getState().posts.after;
    const isLast = getState().posts.isLast;

    if (!token || !page || isLast) return;

    return axios(
      `${URL_API}/${page}?limit=10${after ? `&after=${after}` : ''}`, {
        headers: {
          Authorization: `bearer ${token}`
        },
      })
      .then(({data: {data}}) => {
        const {children: posts, after} = data;
        if (after) {
          dispatch(fetchPostPageAfter({posts, after}));
        }
        if (!after) {
          dispatch(fetchPostPage({posts, after}));
        }
      })
      .catch((error) => ({error: error.toString()}));
  }
);

