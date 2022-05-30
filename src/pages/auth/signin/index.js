import {View} from 'react-native';
import React from 'react';

import Wrapper from '../../../components/onboardWrapper/index';
import Input from '../../../components/textInput/index';
import {styles} from '../forgotPin/styles';

const Index = ({navigation}) => {
  const changeRoute = () => {
    navigation.navigate('Forgot');
  };

  return (
    <Wrapper
      title="Welcome back"
      text="Enter your phone number"
      btnText="Continue"
      changeRoute={changeRoute}
      >
      <View style={styles.inputBox}>
        <Input placeholder="Phone Number" />
      </View>
    </Wrapper>
  );
};

export default Index;
