import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from 'store'
import registerServiceWorker from './registerServiceWorker';

import Home from 'components/Home';

import './index.css';
import 'fonts/FontAwesome/css/font-awesome.css';

ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
