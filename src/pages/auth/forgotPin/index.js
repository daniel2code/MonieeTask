import {View, TextInput, Text} from 'react-native';
import React from 'react';

import {withTheme} from 'react-native-paper';
import Wrapper from '../../../components/onboardWrapper/index';
import {styles} from './styles';

const index = ({theme, navigation}) => {
  const {colors} = theme;

  const changeRoute = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <Wrapper
      title="Welcome back"
      text="Enter your PIN to continue"
      center={true}
      navigation={navigation}
      btnText="Continue"
      changeRoute={changeRoute}
      >
      <View style={styles.inputBox}>
        <TextInput
          keyboardType="numeric"
          secureTextEntry={true}
          style={styles.input}
          maxLength={5}
        />
      </View>

      <Text style={[styles.pinText, {color: colors.text}]}>Forgot PIN?</Text>
    </Wrapper>
  );
};

export default withTheme(index);
