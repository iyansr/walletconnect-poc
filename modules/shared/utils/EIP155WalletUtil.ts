import AsyncStorage from '@react-native-async-storage/async-storage';
import EIP155Lib from '../lib/EIP155Lib';

export let wallet1: EIP155Lib;
export let eip155Wallets: Record<string, EIP155Lib>;
export let eip155Addresses: string[];

let address1: string;

/**
 * Utilities
 */
export async function createOrRestoreEIP155Wallet() {
  const mnemonic1 = await AsyncStorage.getItem('EIP155_MNEMONIC_1');

  if (mnemonic1) {
    wallet1 = EIP155Lib.init({ mnemonic: mnemonic1 });
  } else {
    wallet1 = EIP155Lib.init({});

    // Don't store mnemonic in local storage in a production project!
    await AsyncStorage.setItem('EIP155_MNEMONIC_1', wallet1.getMnemonic());
  }

  address1 = wallet1.getAddress();

  eip155Wallets = {
    [address1]: wallet1,
  };
  eip155Addresses = Object.keys(eip155Wallets);

  return {
    eip155Wallets,
    eip155Addresses,
  };
}
