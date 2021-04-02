import React from 'react';

import SVG from 'react-inlinesvg';

import { Button, Flex, Image, Text } from 'theme-ui';

import { Connector } from 'components';

import logo from 'assets/logo.svg';

const Header = () => (
  <Flex sx={{ justifyContent: 'space-between', px: '20px', py: '20px' }}>
    <Image src={logo} alt="NFTips" />
    <Flex>
      <Connector />
    </Flex>
  </Flex>
);

export default Header;
