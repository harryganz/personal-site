import { createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import reducers from 'reducers';

const history = createHistory();

const routerware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    router: routerReducer,
		...reducers,
  }),
  applyMiddleware(routerware, thunk)
);

export { history };
export default store;
