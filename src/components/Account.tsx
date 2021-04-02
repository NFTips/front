import React, { useState } from 'react';

import SVG from 'react-inlinesvg';

import { Button, Flex, Heading, Text } from 'theme-ui';

import { BigNumber } from '@ethersproject/bignumber';
import { formatEther } from '@ethersproject/units';

import { Copy } from 'components';
import { truncateAddress, truncateBalance } from 'utils';

import cross from '@fortawesome/fontawesome-free/svgs/solid/times.svg';

const AccountModal = ({
  address,
  balance,
  close,
  disconnect
}: {
  address: string;
  balance?: BigNumber;
  close(): void;
  disconnect(): void;
}) => {
  return (
    <Flex
      sx={{
        backgroundColor: 'bg_faded',
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Flex
        sx={{
          borderRadius: '20px',
          position: 'relative',
          backgroundColor: 'clear',
          color: 'background',
          minWidth: '600px',
          minHeight: '300px',
          boxShadow: 'large',
          flexDirection: 'column',
          p: '20px'
        }}
      >
        <SVG
          src={cross}
          width="20px"
          style={{ position: 'absolute', top: '20px', right: '20px', cursor: 'pointer' }}
          color="black"
          onClick={close}
        />
        <Heading sx={{ color: 'primary' }}>Connected Account</Heading>
        <Flex sx={{ flexDirection: 'column', mt: '20px' }}>
          <Flex sx={{ flexDirection: 'column' }}>
            <Heading sx={{ color: 'secondary', fontSize: 3 }}>Address</Heading>
            <Text>
              <Copy white={true} data={address}>
                {address}
              </Copy>
            </Text>
          </Flex>
          <Flex sx={{ flexDirection: 'column', mt: '15px' }}>
            <Heading sx={{ color: 'secondary', fontSize: 3 }}>Balance</Heading>
            <Text>{balance ? `Ξ ${formatEther(balance.toString())}` : '-'}</Text>
          </Flex>
        </Flex>
        <Button
          variant="secondary"
          sx={{ alignSelf: 'flex-end' }}
          marginTop="auto"
          onClick={disconnect}
        >
          Disconnect
        </Button>
      </Flex>
    </Flex>
  );
};

const Account = ({
  address,
  balance,
  disconnect
}: {
  address: string;
  balance?: BigNumber;
  disconnect(): void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex
      sx={{
        bg: 'primary',
        borderRadius: '20px',
        height: '40px',
        alignItems: 'center',
        pl: '15px',
        pr: '5px',
        fontWeight: 'bold'
      }}
    >
      <Text>{balance ? `Ξ ${truncateBalance(formatEther(balance.toString()))}` : '-'}</Text>
      <Flex
        sx={{
          bg: 'background',
          borderRadius: '20px',
          py: '5px',
          px: '10px',
          ml: '10px',
          cursor: 'pointer'
        }}
        onClick={() => setIsOpen(true)}
      >
        <Text>{truncateAddress(address)}</Text>
      </Flex>
      {isOpen && (
        <AccountModal
          address={address}
          balance={balance}
          close={() => setIsOpen(false)}
          disconnect={disconnect}
        />
      )}
    </Flex>
  );
};

export default Account;
