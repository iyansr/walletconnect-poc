// import { View, Text } from 'react-native';
import React from 'react';

import '@walletconnect/react-native-compat';
import 'react-native-url-polyfill/auto';
import '@ethersproject/shims';

import CreateWallet from '@modules/wallet/screens/CreateWallet';

const App = () => {
  return <CreateWallet />;
};

export default App;
