import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import store, {history} from 'store'
import registerServiceWorker from './registerServiceWorker';

import App from 'components/App';
import Home from 'components/Home';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <div>
          <Route exact path="/" component={App}/>
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
