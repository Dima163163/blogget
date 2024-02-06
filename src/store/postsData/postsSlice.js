import {createSlice} from '@reduxjs/toolkit';
import {postsRequestAsync} from './postsDataAction';

const initialState = {
  loading: false,
  posts: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    changePage(state, action) {
      state.page = action.payload;
      state.after = '';
      state.isLast = false;
    },
    resetPostsPage(state) {
      state.posts = [];
      state.loading = false;
      state.error = '';
      state.after = '';
      state.isLast = false;
    },
    insertPostsData(state, action) {
      state.posts = action.payload;
      state.loading = false;
      state.error = '';
      state.after = '';
      state.isLast = false;
    },
    postsRequest(state) {
      state.loading = true;
      state.error = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(postsRequestAsync.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(postsRequestAsync.fulfilled, (state, action) => {
        state.posts.push(...action.payload.posts);
        state.loading = false;
        state.error = '';
        state.after = action.payload.after;
        state.isLast = !action.payload.after;
      })
      .addCase(postsRequestAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  }
});

export default postsSlice.reducer;
export const {changePage, resetPostsPage, insertPostsData} = postsSlice.actions;
