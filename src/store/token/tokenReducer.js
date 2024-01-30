import {setToken} from '../../api/token';
import {UPDATE_TOKEN, DELETE_TOKEN} from './tokenAction';

const initionalState = {
  token: '',
};

export const tokkenMiddleware = store => next => (action) => {
  if (action.type === UPDATE_TOKEN) {
    setToken(action.token);
  }
  if (action.type === DELETE_TOKEN) {
    setToken('');
  }
  next(action);
};

export const tokenReducer = (state = initionalState, action) => {
  switch (action.type) {
    case UPDATE_TOKEN:
      setToken(action.token);
      return {
        ...state,
        token: action.token,
      };
    case DELETE_TOKEN:
      setToken('');
      return {
        ...state,
        token: '',
      };
    default:
      return state;
  }
};
