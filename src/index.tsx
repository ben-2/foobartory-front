import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StoreProvider } from 'easy-peasy';
import { store } from './store';
import * as serviceWorker from './serviceWorker';
import LangProvider from './providers/LangProvider';
import '@fontsource/roboto';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <LangProvider>
        <App />
      </LangProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
