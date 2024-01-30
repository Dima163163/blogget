import {
  POSTS_REQUEST,
  POSTS_REQUEST_ERROR,
  POSTS_REQUEST_SUCCESS
} from './postsDataAction';


const initionalState = {
  loading: false,
  data: [],
  error: '',
};

export const postsDataReducer = (state = initionalState, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POSTS_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
        error: '',
      };
    case POSTS_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
