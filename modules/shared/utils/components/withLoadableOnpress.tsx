import React from 'react';
import { useAsync } from 'react-async';

export interface WithOnPressProps {
  delay?: number;
  onPress?: (...args: any) => any;
}

export default function withLoadableOnPress<P extends object>(
  WrappedComponent: React.FC<P>,
) {
  return React.memo(({ onPress, delay = 0, ...rest }: P & WithOnPressProps) => {
    const sleep = React.useCallback((ms: number) => {
      return new Promise(resolve => setTimeout(resolve, ms));
    }, []);
    const handleOnPress = React.useCallback(
      async (...args: any[]) => {
        await sleep(delay);
        return onPress?.(...args);
      },
      [sleep, delay, onPress],
    );
    const { isLoading, run: handleClick } = useAsync({
      deferFn: handleOnPress,
    });
    return (
      <WrappedComponent
        {...(rest as P)}
        isLoading={isLoading}
        onPress={onPress ? handleClick : undefined}
      />
    );
  });
}
