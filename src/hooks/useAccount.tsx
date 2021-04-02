import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useEffect, useState } from 'react';
import { useEagerConnect } from './useEagerConnect';
import { useInactiveListener } from './useInactiveListener';

export const useAccount = () => {
  const { connector } = useWeb3React();
  const [activatingConnector, setActivatingConnector] = useState<InjectedConnector | undefined>();

  const triedEager = useEagerConnect();

  useInactiveListener(!triedEager || !!activatingConnector);

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  return { setActivatingConnector };
};
