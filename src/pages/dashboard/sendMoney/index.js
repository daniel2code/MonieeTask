import {Text, View} from 'react-native';
import React from 'react';

import {Button, withTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import Input from '../../../components/textInput/index';
import {styles} from './styles';

const Index = ({theme}) => {
  const {colors} = theme;

  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="arrowleft" size={25} color="#000" />
          <Text
            style={{
              color: '#0C0C26',
              fontWeight: '600',
              fontSize: 17,
              marginLeft: 15,
            }}>
            Send Money
          </Text>
        </View>

        <View style={{width: '100%', alignItems: 'center'}}>
          <View style={styles.balBox}>
            <View style={styles.circle} />
            <View style={styles.balTextBox}>
              <Text style={[{color: colors.text}]}>Send</Text>
              <Text style={[{color: colors.text, fontWeight: '800'}]}>
                ₦15,000
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.inputBox}>
          <Input placeholder="Purpose of request" />
          <Input placeholder="Phone number" />
        </View>
      </View>

      <Button
        mode="contained"
        uppercase={false}
        // onPress={() => console.log('Pressed')}
        style={[styles.btn, {backgroundColor: colors.primary}]}>
        <Text style={{color: '#fff', fontWeight: '600'}}>Send</Text>
      </Button>
    </View>
  );
};

export default withTheme(Index);
