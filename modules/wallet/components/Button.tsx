import {
  StyleSheet,
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import { color } from '@modules/shared/theme';

type Props = {
  /**@default "Text" */
  text?: string;
} & TouchableOpacityProps;

const Button = (props: Props) => {
  const { text = 'Text', ...rest } = props;

  return (
    <TouchableOpacity {...rest} style={style.button}>
      <Text style={style.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    backgroundColor: color.primary,
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
