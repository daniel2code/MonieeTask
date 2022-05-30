import {Text, View, ScrollView} from 'react-native';
import React from 'react';

import {styles} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import {withTheme, Avatar, Button} from 'react-native-paper';

const Index = ({theme}) => {
  const {colors} = theme;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.bodyBox}>
        <View style={styles.search}>
          <Text style={[{color: colors.text}]}>Jason Derulo</Text>
          <Icon
            name="closecircleo"
            size={17}
            style={{marginLeft: 10, color: colors.text}}
          />
        </View>

        <View style={styles.avatarBox}>
          <Avatar.Image
            source={require('../../../assets/person.png')}
            size={50}
          />

          <Icon name="closecircle" size={17} style={styles.close} />
        </View>

        <View style={styles.divider} />

        {[...Array(10)].map((item, index) => {
          return (
            <View style={styles.box} key={Math.random()}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Avatar.Image
                  source={require('../../../assets/person.png')}
                  size={32}
                />

                <View style={{marginLeft: 16}}>
                  <Text style={[{color: colors.text}]}>Terry Calzoni</Text>
                  <Text style={[{color: colors.text, fontWeight: '800'}]}>
                    +44 8164431677
                  </Text>
                </View>
              </View>

              <View>
                {index === 0 ? (
                  <Icon name="checkcircle" size={24} color="#6FCF97" />
                ) : (
                  <Icon2 name="circle" size={24} color="#E0E0E0" />
                )}
              </View>
            </View>
          );
        })}

        <Button
          mode="contained"
          uppercase={false}
          // onPress={() => console.log('Pressed')}
          style={[styles.btn, {backgroundColor: colors.primary}]}>
          <Text style={{color: '#fff', fontWeight: '600'}}>Request</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default withTheme(Index);
