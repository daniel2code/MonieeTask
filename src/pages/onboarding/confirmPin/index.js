import {TextInput, View} from 'react-native';
import React from 'react';

import Wrapper from '../../../components/onboardWrapper/index';
import {styles} from './styles';

const Index = ({ navigation }) => {
  const changeRoute = () => {
    navigation.navigate('Login');
  };

  return (
    <Wrapper
      text="Facilisis mauris, potenti vitae cras risus."
      title="Confirm PIN"
      arrow={true}
      btnText="Save and Continue"
      changeRoute={changeRoute}
      navigation={navigation}
      >
      <View style={styles.inputBox}>
        <TextInput
          keyboardType="numeric"
          secureTextEntry={true}
          style={styles.input}
          maxLength={5}
        />
      </View>
    </Wrapper>
  );
};

export default Index;
