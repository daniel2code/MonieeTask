import {View, TextInput, Text} from 'react-native';
import React from 'react';

import Wrapper from '../../../components/onboardWrapper/index';
import {withTheme} from 'react-native-paper';
import {styles} from './styles';

const Index = ({theme, navigation}) => {
  const {colors} = theme;

  const changeRoute = () => {
    navigation.navigate('BVN');
  };

  return (
    <Wrapper
      title="Verification"
      text="Lacus integer imperdiet lacinia consectetur erat scelerisque."
      btnText="Submit"
      arrow={true}
      navigation={navigation}
      changeRoute={changeRoute}>
      <View>
        <View style={styles.inputBox}>
          <TextInput style={styles.input} placeholderTextColor={colors.text} />
          <TextInput style={styles.input} placeholderTextColor={colors.text} />
          <TextInput style={styles.input} placeholderTextColor={colors.text} />
          <TextInput style={styles.input} placeholderTextColor={colors.text} />
        </View>
      </View>

      <Text style={[styles.pinText, {color: colors.text}]}>
        Verification code will be resent in
      </Text>

      <Text
        style={[
          styles.pinText,
          {color: colors.text, fontWeight: '900', marginTop: 15},
        ]}>
        0:45
      </Text>
    </Wrapper>
  );
};

export default withTheme(Index);
