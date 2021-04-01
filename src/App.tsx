import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Flex } from 'theme-ui';

import { Header, Home } from 'components';

const App = () => {
  return (
    <BrowserRouter>
      <Flex sx={{ flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Flex sx={{ flex: '1' }}>
          <Switch>
            <Route exact path={'/'} component={Home} />
          </Switch>
        </Flex>
      </Flex>
    </BrowserRouter>
  );
};

export default App;
