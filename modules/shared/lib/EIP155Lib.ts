import { providers, type TypedDataDomain, Wallet } from 'ethers';

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

  static createWallet() {
    const wallet = Wallet.createRandom();
    return new EIP155Lib(wallet);
  }

  static importWallet({ mnemonic }: IInitArgs) {
    const wallet = Wallet.fromMnemonic(mnemonic);
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

  _signTypedData(domain: TypedDataDomain, types: any, data: any) {
    return this.wallet._signTypedData(domain, types, data);
  }

  connect(provider: providers.JsonRpcProvider) {
    return this.wallet.connect(provider);
  }

  signTransaction(transaction: providers.TransactionRequest) {
    return this.wallet.signTransaction(transaction);
  }
}
