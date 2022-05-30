import {StyleSheet} from 'react-native';
import React from 'react';

import Wrapper from '../../../components/onboardWrapper/index';
import Input from '../../../components/textInput/index';

const Index = ({ navigation }) => {

  const changeRoute=()=>{
    navigation.navigate("Secure")
  }

  return (
    <Wrapper
      title="Add your bank details"
      text="Kindly ensure the details you enter belong to you."
      arrow={true}
      btnText="Save and Continue"
      navigation={navigation}
      changeRoute={changeRoute}
      >

      <Input placeholder="Bank" />
      <Input placeholder="Account number" />
      <Input placeholder="BVN" />
      
    </Wrapper>
  );
};

export default Index;

const styles = StyleSheet.create({});
