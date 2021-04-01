import React, { ReactChild } from 'react';

import { Provider } from 'react-redux';

import { Web3ReactProvider } from '@web3-react/core';

import { getLibrary } from 'config';
import { store } from 'Store';
import { theme } from 'theme';
import { ThemeProvider } from 'theme-ui';

const Providers = ({ children }: { children: ReactChild }) => (
  <React.Fragment>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    </Web3ReactProvider>
  </React.Fragment>
);

export default Providers;
