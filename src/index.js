import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import store, {history} from 'store'
import registerServiceWorker from './registerServiceWorker';

import App from 'components/App';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
