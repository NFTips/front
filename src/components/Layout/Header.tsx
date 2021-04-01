import React from 'react';

import SVG from 'react-inlinesvg';

import { Button, Flex, Image, Text } from 'theme-ui';

import { Connector } from 'components';

import logo from 'assets/logo.svg';
import bullseye from '@fortawesome/fontawesome-free/svgs/solid/bullseye.svg';

const Header = () => (
  <Flex sx={{ justifyContent: 'space-between', px: '20px', py: '20px' }}>
    <Image src={logo} alt="NFTips" />
    <Flex>
      <Button variant="secondary" mr="20px">
        <Flex sx={{ alignItems: 'center' }}>
          <SVG src={bullseye} fill="white" width="20px" />
          <Text ml="10px">Get your Season Pass</Text>
        </Flex>
      </Button>
      <Connector />
    </Flex>
  </Flex>
);

export default Header;
