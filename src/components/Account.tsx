import React from 'react';

import { Flex, Text } from 'theme-ui';

import { BigNumber } from '@ethersproject/bignumber';
import { formatEther } from '@ethersproject/units';

import { truncateAddress, truncateBalance } from 'utils';

const Account = ({ address, balance }: { address: string; balance?: BigNumber }) => {
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
      <Flex sx={{ bg: 'background', borderRadius: '20px', py: '5px', px: '10px', ml: '10px' }}>
        <Text>{truncateAddress(address)}</Text>
      </Flex>
    </Flex>
  );
};

export default Account;
