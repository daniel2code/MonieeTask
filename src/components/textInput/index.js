import {TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {withTheme} from 'react-native-paper';

const Input = ({placeholder, onChange, theme, keyType, value}) => {
  const {colors} = theme;

  return (
    <TextInput
      style={[styles.input, {color: colors.text}]}
      placeholder={placeholder}
      placeholderTextColor={colors.text}
      onChange={onChange}
      keyboardType={keyType}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    backgroundColor: '#E0E0E0',
    borderColor: 'white',
    height: 50,
    paddingHorizontal: 15,
    width: '100%',
    marginTop: 10,
  },
});

export default withTheme(Input);
