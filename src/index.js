import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const Main = () => (
  <Provider store={configureStore()}>
    <App />
  </Provider>
);

ReactDOM.render(<Main />, document.getElementById('root'));
