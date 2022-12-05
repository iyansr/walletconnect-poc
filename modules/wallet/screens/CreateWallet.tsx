/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import React from 'react';

import Button from '@modules/wallet/components/Button';

const CreateWallet = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
      automaticallyAdjustKeyboardInsets>
      <Button text="Create Wallet" />
      <View style={{ marginVertical: 8, width: '100%', paddingHorizontal: 32 }}>
        <Text style={{ textAlign: 'center' }}>Or</Text>
        <TextInput
          multiline
          numberOfLines={6}
          style={styles.textInput}
          placeholder="Input Mnemonic phrase"
        />
      </View>
      <Button text="Import Wallet" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  textInput: {
    margin: 0,
    padding: 4,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'gray',
    marginBottom: 7,
    paddingHorizontal: 8,
    includeFontPadding: false,
    width: '100%',
    textAlignVertical: 'top',
  },
});

export default CreateWallet;
