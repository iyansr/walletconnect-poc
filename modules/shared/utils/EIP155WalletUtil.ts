import AsyncStorage from '@react-native-async-storage/async-storage';
import EIP155Lib from '../lib/EIP155Lib';

export let wallet1: EIP155Lib;
export let eip155Wallets: Record<string, EIP155Lib>;
export let eip155Addresses: string[];

let address1: string;

const KEIP155_MNEMONIC = 'EIP155_MNEMONIC';

/**
 * Create Wallet
 */
export async function createEIP155Wallet() {
  wallet1 = EIP155Lib.createWallet();

  // Don't store mnemonic in local storage in a production project!
  await AsyncStorage.setItem(KEIP155_MNEMONIC, wallet1.getMnemonic());

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

/**
 * Restore Wallet
 */
export async function restoreEIP155Wallet() {
  const mnemonic1 = await AsyncStorage.getItem(KEIP155_MNEMONIC);

  if (mnemonic1) {
    wallet1 = EIP155Lib.importWallet({ mnemonic: mnemonic1 });
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

  return null;
}
