import {TextInput, View} from 'react-native';
import React from 'react';

import Wrapper from '../../../components/onboardWrapper/index';
import {styles} from './styles';

const Index = ({ navigation }) => {
  const changeRoute = () => {
    navigation.navigate('Confirm');
  };

  return (
    <Wrapper
      text="Facilisis mauris, potenti vitae cras risus."
      title="Set PIN"
      arrow={true}
      btnText="Save and Continue"
      navigation={navigation}
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
    </Wrapper>
  );
};

export default Index;
