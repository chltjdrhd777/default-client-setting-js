import React from 'react';
import { render } from 'react-dom';
import App from 'App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'globalCSS/theme';
import GlobalStyles from 'globalCSS/global';
import store from 'redux/store';
import { Provider as ReduxProvider } from 'react-redux';

render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
