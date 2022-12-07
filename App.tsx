// import { View, Text } from 'react-native';
import React from 'react';

import '@walletconnect/react-native-compat';
import 'react-native-url-polyfill/auto';
import '@ethersproject/shims';

import CreateWallet from '@modules/wallet/screens/CreateWallet';
import useInitialization from '@modules/shared/hooks/useInitialization';
import { Text, View } from 'react-native';

if (__DEV__) {
  import('./modules/shared/lib/reactotron').then(() =>
    console.log('Reactotron Configured!'),
  );
}

const App = () => {
  const initialized = useInitialization();

  if (!initialized) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return <CreateWallet />;
};

export default App;
