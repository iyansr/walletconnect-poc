import { useCallback, useEffect, useState } from 'react';

import { createOrRestoreEIP155Wallet } from '../utils/EIP155WalletUtil';
import { createSignClient } from '../utils/WalletConnectUtil';
import useSettings from './useSettings';

export default function useInitialization() {
  const [initialized, setInitialized] = useState(false);
  const { setEip155Address } = useSettings(state => ({
    setEip155Address: state.setEip155Address,
  }));

  const onInitialize = useCallback(async () => {
    try {
      // console.time('initialization');
      const { eip155Addresses } = await createOrRestoreEIP155Wallet();

      setEip155Address(eip155Addresses[0]);

      await createSignClient();

      setInitialized(true);
      // console.timeEnd('initialization');
    } catch (err: unknown) {
      // eslint-disable-next-line no-alert
      // alert(err);
      console.log(err);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!initialized) {
      onInitialize();
    }
  }, [initialized, onInitialize]);

  return initialized;
}
