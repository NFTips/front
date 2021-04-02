import React, { ReactChild, useCallback, useEffect, useState } from 'react';

import SVG from 'react-inlinesvg';

import { Flex } from 'theme-ui';

import { useTimeoutFn } from 'hooks';

import copy from '@fortawesome/fontawesome-free/svgs/regular/copy.svg';
import check from '@fortawesome/fontawesome-free/svgs/solid/check.svg';
const Copy = ({
  children,
  data,
  white = false
}: {
  children: ReactChild;
  data: string;
  white?: boolean;
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const [isReady, clear, set] = useTimeoutFn(() => setIsCopied(false), 1500);

  useEffect(() => clear(), []);

  const displayIsCopied = useCallback(() => {
    if (isReady() === false) clear();
    else {
      setIsCopied(true);
      set();
    }
  }, [setIsCopied]);

  return (
    <Flex sx={{ alignItems: 'center' }}>
      {children}
      <SVG
        src={isCopied ? check : copy}
        width="15px"
        color={white ? '#121317' : 'white'}
        style={{ marginLeft: '10px', cursor: 'pointer' }}
        onClick={() => {
          navigator.clipboard.writeText(data);
          displayIsCopied();
        }}
      />
    </Flex>
  );
};

export default Copy;
