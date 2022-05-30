import {Text, View, Image} from 'react-native';
import React from 'react';

import {Button, withTheme} from 'react-native-paper';
import {styles} from './styles';

const Index = ({theme}) => {
  const {colors} = theme;

  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <View style={styles.iconBox}>
          <Image source={require('../../../assets/scan.png')} />
          <Image source={require('../../../assets/clock.png')} />
        </View>
        <View style={styles.valBox}>
          <Text style={[styles.valText, {color: colors.primary}]}>₦0</Text>

          <View style={styles.balBox}>
            <Text style={{color: colors.primary}}>Wallet Balance</Text>
            <Text
              style={[
                {
                  fontWeight: '800',
                  color: colors.primary,
                  fontStyle: 'italic',
                  marginTop: 4,
                },
              ]}>
              5,200
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.btnBox}>
        <Button
          mode="contained"
          uppercase={false}
          // onPress={() => console.log('Pressed')}
          style={[styles.btn, {backgroundColor: colors.disabled}]}>
          <Text style={{color: '#828282', fontWeight: '600'}}>Request</Text>
        </Button>

        <Button
          mode="contained"
          uppercase={false}
          // onPress={() => console.log('Pressed')}
          style={[styles.btn, {backgroundColor: colors.disabled}]}>
          <Text style={{color: '#828282', fontWeight: '600'}}>Send</Text>
        </Button>
      </View>
    </View>
  );
};

export default withTheme(Index);
