import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

/* Define your translations */
let i18nConfig = {
  locale: 'el',
  messages: {
    "home.welcome": "Καλώς 'Ηρθατε στο {name}!",
    "home.declarative": "Δηλωτικό"
  }
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <IntlProvider
        locale={i18nConfig.locale}
        defaultLocale={i18nConfig.locale}
        messages={i18nConfig.messages}
      >
        <App />
      </IntlProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
