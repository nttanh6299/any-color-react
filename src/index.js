import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import configureStore from './store/configureStore';

const Main = () => (
  <Provider store={configureStore()}>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </Provider>
);

ReactDOM.render(<Main />, document.getElementById('root'));
