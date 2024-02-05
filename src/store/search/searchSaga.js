import {put, takeLatest, select, call, apply} from 'redux-saga/effects';
import {URL_API} from '../../api/const';
import {
  SEARCH_REQUEST,
  searchRequestError,
  searchRequestSuccess
} from './searchAction';
import {insertPostData} from '../postsData/postsSlice';

function* fetchSearch(search) {
  try {
    const token = yield select(state => state.token.token);
    const request = yield call(fetch, `${URL_API}/search?q=${search}`, {
      headers: {
        Authorization: `bearer ${token}`
      }
    });
    const response = yield apply(request, request.json);
    yield put(searchRequestSuccess(response.data));
    yield put(insertPostData(response.data.children));
  } catch (error) {
    yield put(searchRequestError(error));
  }
}

export function* watchSearch() {
  yield takeLatest(SEARCH_REQUEST, fetchSearch);
}
