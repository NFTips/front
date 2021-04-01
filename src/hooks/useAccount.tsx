import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { tipAbi, tipAddress } from 'config';
import { Contract } from 'ethers';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCanTip, setSubscribed } from 'Store';
import { useEagerConnect } from './useEagerConnect';
import { useInactiveListener } from './useInactiveListener';

export const useAccount = () => {
  const { active, library, connector } = useWeb3React();
  const [activatingConnector, setActivatingConnector] = useState<InjectedConnector | undefined>();
  const dispatch = useDispatch();

  const triedEager = useEagerConnect();

  useInactiveListener(!triedEager || !!activatingConnector);

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  useEffect(() => {
    const verifySubscribtion = async () => {
      const tipContract = new Contract(tipAddress, tipAbi, library.getSigner());
      const res = await tipContract.alreadySubscribe();
      dispatch(setSubscribed(res));
    };

    const verifyTip = async () => {
      const tipContract = new Contract(tipAddress, tipAbi, library.getSigner());
      const res = await tipContract.canTip();
      dispatch(setCanTip(res));
    };

    if (active) {
      verifyTip();
      verifySubscribtion();
    }
  }, [active, library]);

  return { setActivatingConnector };
};
