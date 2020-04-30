import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import { getLocalStorage } from './utils/localStorage';

const persisted = getLocalStorage();

const Main = () => (
  <Provider store={configureStore(persisted)}>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </Provider>
);

ReactDOM.render(<Main />, document.getElementById('root'));
