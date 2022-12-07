import { providers, Wallet } from 'ethers';

/**
 * Types
 */
interface IInitArgs {
  mnemonic?: string;
}

/**
 * Library
 */
export default class EIP155Lib {
  wallet: Wallet;

  constructor(wallet: Wallet) {
    this.wallet = wallet;
  }

  static init({ mnemonic }: IInitArgs) {
    const start = performance.now();
    const wallet = mnemonic
      ? Wallet.fromMnemonic(mnemonic)
      : Wallet.createRandom();
    const end = performance.now();
    console.log(`Creating a Wallet took ${end - start} ms.`);
    return new EIP155Lib(wallet);
  }

  getMnemonic() {
    return this.wallet.mnemonic.phrase;
  }

  getAddress() {
    return this.wallet.address;
  }

  signMessage(message: string) {
    return this.wallet.signMessage(message);
  }

  _signTypedData(domain: any, types: any, data: any) {
    return this.wallet._signTypedData(domain, types, data);
  }

  connect(provider: providers.JsonRpcProvider) {
    return this.wallet.connect(provider);
  }

  signTransaction(transaction: providers.TransactionRequest) {
    return this.wallet.signTransaction(transaction);
  }
}
