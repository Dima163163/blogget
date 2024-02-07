import {createSlice} from '@reduxjs/toolkit';
import {postsRequestAsync} from './postsDataAction';

const initialState = {
  loading: '',
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
      state.posts = [];
      state.page = action.payload;
      state.after = '';
      state.isLast = false;
    },
    resetPostsPage(state) {
      state.posts = [];
      state.loading = '';
      state.error = '';
      state.after = '';
      state.isLast = false;
    },
    insertPostsData(state, action) {
      state.posts = action.payload;
      state.loading = 'loaded';
      state.error = '';
      state.after = '';
      state.isLast = false;
    },
<<<<<<< HEAD
=======
    fetchPostPage(state, action) {
      state.posts = action.payload.posts;
      state.loading = 'loaded';
      state.error = '';
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
    },
    fetchPostPageAfter(state, action) {
      state.posts = [...state.posts, ...action.payload.posts];
      state.loading = 'loaded';
      state.error = '';
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
    },
>>>>>>> blogget14
  },
  extraReducers: builder => {
    builder
      .addCase(postsRequestAsync.pending, (state) => {
        state.loading = 'loading';
        state.error = '';
      })
      .addCase(postsRequestAsync.fulfilled, (state, action) => {
        state.loading = 'loaded';
      })
      .addCase(postsRequestAsync.rejected, (state, action) => {
        state.loading = 'error';
        state.error = action.error;
      });
  }
});

export default postsSlice.reducer;
export const {
  changePage,
  resetPostsPage,
  insertPostsData,
  fetchPostPage,
  fetchPostPageAfter,
} = postsSlice.actions;
