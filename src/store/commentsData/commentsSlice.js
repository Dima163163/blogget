import {createSlice} from '@reduxjs/toolkit';
import {commentsRequestAsync} from './commentsDataAction';

const initialState = {
  status: '',
  post: {},
  comments: [],
  error: '',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(commentsRequestAsync.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(commentsRequestAsync.fulfilled, (state, action) => {
        state.post = action.payload.post;
        state.comments = action.payload.comments;
        state.error = '';
        state.status = 'loaded';
      })
      .addCase(commentsRequestAsync.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error;
      });
  },
});
export default commentsSlice.reducer;
