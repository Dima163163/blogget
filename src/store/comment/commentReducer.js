import {UPDATE_COMMENT} from './commentAction';

const initionalState = {
  comment: 'Hello Redux',
};

export const commentReducer = (state = initionalState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        comment: action.comment,
      };
    default:
      return state;
  }
};
