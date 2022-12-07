import SignClient from '@walletconnect/sign-client';
import { PROJECT_ID, RELAY_URL } from '@modules/shared/config';

export let signClient: SignClient;

export async function createSignClient() {
  signClient = await SignClient.init({
    logger: 'debug',
    projectId: PROJECT_ID,
    relayUrl: RELAY_URL,
    metadata: {
      name: 'React Wallet',
      description: 'React Wallet for WalletConnect',
      url: 'https://walletconnect.com/',
      icons: ['https://avatars.githubusercontent.com/u/37784886'],
    },
  });
}
