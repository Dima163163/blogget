import axios from 'axios';
import {URL_API} from '../../api/const';
import {createAsyncThunk} from '@reduxjs/toolkit';


export const postsRequestAsync = createAsyncThunk(
  'posts/fetch', (page, {getState}) => {
    const token = getState().token.token;
    const after = getState().posts.after;
    const isLast = getState().posts.isLast;

    if (!token || !page || isLast) return;

    return axios(
      `${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
        headers: {
          Authorization: `bearer ${token}`
        },
      })
      .then(({data: {data}}) => {
        const {children: posts, after} = data;
        return {posts, after};
      })
      .catch((error) => ({error: error.toString()}));
  }
);

