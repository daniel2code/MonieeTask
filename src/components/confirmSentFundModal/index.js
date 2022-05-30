import {Text, View, Image} from 'react-native';
import React from 'react';

import {withTheme, Button} from 'react-native-paper';
import {styles} from './styles';

const Index = ({theme, navigation }) => {
  const {colors} = theme;

  return (
    <View style={styles.container}>
      <View></View>
      <View style={styles.bodyBox}>
        <Image source={require('../../assets/oval.png')} size={150} />
        <Text style={[styles.title, {color: colors.title}]}>Request sent</Text>
        <Text style={[styles.text, {color: colors.text}]}>
          Your request for ₦2,000 to Terry and 5 others has been sent
        </Text>
      </View>
      <Button
        mode="contained"
        uppercase={false}
        onPress={() => navigation.navigate('User')}
        style={[styles.btn, {backgroundColor: colors.disabled}]}>
        <Text style={{color: colors.text, fontWeight: '600'}}>Go To Home</Text>
      </Button>
    </View>
  );
};

export default withTheme(Index);
