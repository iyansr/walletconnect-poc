import AsyncStorage from '@react-native-async-storage/async-storage';

import Reactotron from 'reactotron-react-native';

Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

const yeOldeConsoleLog = console.log;

// make a new one
console.log = (...args: any[]) => {
  // always call the old one, because React Native does magic swizzling too
  yeOldeConsoleLog(...args);

  // send this off to Reactotron.
  Reactotron.display({
    name: 'CONSOLE.LOG',
    value: args.length === 1 ? args[0] : args,
    preview: JSON.stringify(args),
  });
};

Reactotron.onCustomCommand({
  command: 'show_storage',
  title: 'Show Async Storage',
  description: 'Show Async Storage Console log',
  handler: async () => {
    const keys = await AsyncStorage.getAllKeys();
    let items = [];

    for (const key of keys) {
      const value = await AsyncStorage.getItem(key);
      items.push({
        key,
        value,
      });
    }

    console.log('===STORAGE===');
    console.log([items]);
  },
});
