import {View, TextInput} from 'react-native';
import React from 'react';
import Wrapper from '../../../components/onboardWrapper/index';
import {withTheme} from 'react-native-paper';

import {styles} from './styles';

const Index = props => {
  const {colors} = props.theme;

  const changeRoute = () => {
    props.navigation.navigate('Verify');
  };

  return (
    <View>
      <Wrapper
        title="Let’s begin"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        btnText="Get Started" 
        changeRoute={changeRoute}
        >
        <TextInput
          // mode="outlined"
          style={styles.input}
          label="Phone Number"
          placeholder="Phone Number"
          placeholderTextColor={colors.text}
          // right={<TextInput.Affix text="/100" />}
        />
      </Wrapper>
    </View>
  );
};

export default withTheme(Index);
