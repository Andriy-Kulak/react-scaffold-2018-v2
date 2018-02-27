import {
  GET_API_DATA,
  GET_API_DATA_LOADED,
  GET_API_DATA_ERROR,
} from '../constants';
import appReducer from '../reducer';

describe('App Reducer', () => {
  it('type ~ GET_API_DATA ~ returning loading state', () => {
    expect(appReducer({ foo: 'bar' }, { type: GET_API_DATA }))
      .toEqual({ apiDataError: null, apiDataLoading: true, foo: 'bar' });
  });

  it('type ~ GET_API_DATA_LOADED ~ returning complete state w/ data', () => {
    expect(appReducer({ foo: 'bar' }, { type: GET_API_DATA_LOADED, data: { test: 123 } }))
      .toEqual({
        apiData: { test: 123 },
        apiDataError: null,
        apiDataLoaded: true,
        apiDataLoading: false,
        foo: 'bar'
      });
  });

  it('type ~ GET_API_DATA_ERROR ~ returning error on failed request', () => {
    expect(appReducer({ foo: 'bar' }, {
      type: GET_API_DATA_ERROR,
      error: { test: 'error msg' },
      data: { test: 123 }
    }))
      .toEqual({
        apiData: { test: 123 },
        apiDataError: { test: 'error msg' },
        apiDataLoaded: false,
        apiDataLoading: false,
        foo: 'bar'
      });
  });
});
