import { takeLatest, call, put } from 'redux-saga/effects';

import { getAPIDataLoaded, getAPIDataError } from './actions';

import { GET_API_DATA } from './constants';

/*
  Data downloading using pure JS fetch
  @type: JS object
  { result: resultObj, error: errorObj }
*/
export const fetchData = (url, options) => {
  console.log('url --->', url);
  console.log('options --->', options);
  const fetchRequest = new Request(url, options);

  return fetch(fetchRequest)
    .then((response) => (response.json().then((result) => ({ result }))
    ))
    .catch((error) => {
      console.log('ERROR  ---->', error.message);
      return ({ error });
    });
};

function* getApiData() {
  const { result, error } = yield call(fetchData, '/get', { method: 'get' });
  if (error) {
    yield put(getAPIDataError(error));
  }

  yield put(getAPIDataLoaded(result));
}

function* apiData() {
  yield takeLatest(GET_API_DATA, getApiData);
}

export default apiData;
