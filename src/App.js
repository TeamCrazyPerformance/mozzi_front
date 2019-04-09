import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Router from './router';

import checkSignIn from './redux/checkSignIn';

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

const checkedApp = checkSignIn(App);

export default checkedApp;
