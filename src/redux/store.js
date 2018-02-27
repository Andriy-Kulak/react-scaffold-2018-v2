import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';


import createGlobalReducer from './root-reducer';
import globalSagas from './root-sagas';

export const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  // Middleware for intercepting and dispatching navigation actions
  routerMiddleware(history),
  sagaMiddleware,
];

const storeMiddleware = (process.env.NODE_ENV === 'development') ?
  composeWithDevTools(applyMiddleware(...middlewares)) :
  applyMiddleware(...middlewares);

const store = createStore(
  createGlobalReducer(),
  storeMiddleware,
);

sagaMiddleware.run(globalSagas);

export default store;
