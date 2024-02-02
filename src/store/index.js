import {tokenReducer, tokkenMiddleware} from './token/tokenReducer';
import {commentReducer} from './comment/commentReducer';
import {authReducer} from './auth/authReducer';
import postsDataReducer from './postsData/postsSlice';
import commentsReducer from './commentsData/commentsSlice';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    comment: commentReducer,
    auth: authReducer,
    posts: postsDataReducer,
    comments: commentsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokkenMiddleware),
});


