import React, { useEffect, useState } from 'react';

import SVG from 'react-inlinesvg';
import { Button, Flex, Text } from 'theme-ui';

import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { BigNumber } from '@ethersproject/bignumber';

import { useAccount } from 'hooks';
import { injected } from 'config';
import { Account } from 'components';

import wallet from '@fortawesome/fontawesome-free/svgs/solid/wallet.svg';

const Connector = () => {
  const { active, activate, account, connector, library, chainId, deactivate } = useWeb3React();
  const { setActivatingConnector } = useAccount();

  const [balance, setBalance] = useState<BigNumber | undefined>();

  useEffect(() => {
    if (!!account && !!library) {
      let stale = false;

      library
        .getBalance(account)
        .then((balance: BigNumber) => {
          if (!stale) {
            setBalance(balance);
          }
        })
        .catch(() => {
          if (!stale) {
            setBalance(undefined);
          }
        });

      return () => {
        stale = true;
        setBalance(undefined);
      };
    }
  }, [account, library, chainId]);

  return (
    <React.Fragment>
      {active && account ? (
        <Account address={account} balance={balance} disconnect={deactivate} />
      ) : (
        <Button
          variant="primary"
          onClick={() => {
            setActivatingConnector(connector as InjectedConnector);
            activate(injected);
          }}
        >
          <Flex sx={{ alignItems: 'center' }}>
            <SVG src={wallet} fill="white" width="20px" />
            <Text sx={{ ml: '10px', mb: 0 }}>Connect Wallet</Text>
          </Flex>
        </Button>
      )}
    </React.Fragment>
  );
};

export default Connector;
