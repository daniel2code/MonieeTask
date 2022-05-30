import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './home/index';
import ContactScreen from './contact/index';

const Tab = createBottomTabNavigator();

import Icon from 'react-native-vector-icons/Octicons';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

const Index = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="User"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Icon name="home" color={'#333333'} size={25} />,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarIcon: () => (
            <Icon2 name="dashboard" color={'#333333'} size={25} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="User1"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Icon1 name="user" color={'#333333'} size={25} />,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Index;
