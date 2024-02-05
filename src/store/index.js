import {tokenReducer, tokkenMiddleware} from './token/tokenReducer';
import {commentReducer} from './comment/commentReducer';
import {authReducer} from './auth/authReducer';
import postsDataReducer from './postsData/postsSlice';
import commentsReducer from './commentsData/commentsSlice';
import {searchReducer} from './search/searchReducer';
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    comment: commentReducer,
    auth: authReducer,
    posts: postsDataReducer,
    comments: commentsReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokkenMiddleware, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
