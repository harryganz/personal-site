import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from 'store'
import registerServiceWorker from './registerServiceWorker';

import Home from 'components/Home';
import About from 'components/About';

import './index.css';

ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
