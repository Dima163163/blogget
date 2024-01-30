import {
  COMMENTS_RQUEST,
  COMMENTS_RQUEST_ERROR,
  COMMENTS_RQUEST_SUCCESS
} from './commentsDataAction';


const initionalState = {
  status: '',
  data: [],
  error: ''
};

export const commentsDataReducer = (state = initionalState, action) => {
  switch (action.type) {
    case COMMENTS_RQUEST:
      return {
        ...state,
        status: 'loading',
        error: '',
      };
    case COMMENTS_RQUEST_SUCCESS:
      return {
        ...state,
        status: 'loaded',
        data: action.data,
        error: '',
      };
    case COMMENTS_RQUEST_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.error,
      };
    default:
      return state;
  }
};
