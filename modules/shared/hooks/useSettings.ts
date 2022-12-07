import create from 'zustand';

interface State {
  testNets: boolean;
  account: number;
  eip155Address: string;
  setAccount: (acc: number) => void;
  setEip155Address: (address: string) => void;
}

const useSettings = create<State>(set => ({
  testNets: true,
  account: 0,
  eip155Address: '',
  setAccount: acc => set(() => ({ account: acc })),
  setEip155Address: address => set(() => ({ eip155Address: address })),
}));

export default useSettings;
