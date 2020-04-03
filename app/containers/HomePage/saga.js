import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS } from './constants';
import { reposLoaded, repoLoadingError } from './actions';

import request from 'utils/request';

export function* getRepos() {
  // Select username from store
  const requestURL = `https://swapi.co/api/people/?format=json`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    console.log('repos',repos)
    yield put(reposLoaded(repos));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}
// Root saga
export default function* rootSaga() {
  // if necessary, start multiple sagas at once with `all`
  yield takeLatest(LOAD_REPOS, getRepos);
}