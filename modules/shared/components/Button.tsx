import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import withLoadableOnPress, {
  type WithOnPressProps,
} from '@modules/shared/utils/components/withLoadableOnpress';
import { color } from '@modules/shared/theme';

type Props = {
  isLoading?: boolean;
  text?: string;
  disabled?: boolean;
} & WithOnPressProps;

const Button = withLoadableOnPress<Props>(
  ({ isLoading = false, disabled = false, text = 'Button', ...rest }) => {
    const isDisabled = isLoading || disabled;
    return (
      <TouchableOpacity
        style={isDisabled ? style.buttonDisabled : style.button}
        {...rest}>
        <Text style={style.text}>{isLoading ? 'Loading...' : text}</Text>
      </TouchableOpacity>
    );
  },
);

const style = StyleSheet.create({
  button: {
    backgroundColor: color.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  buttonDisabled: {
    backgroundColor: 'gray',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  text: {
    color: '#FFF',
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default Button;
