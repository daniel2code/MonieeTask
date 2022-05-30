// import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../pages/onboarding/signup';
import VerifyScreen from '../pages/onboarding/verify';
import BVNScreen from '../pages/onboarding/bvn/index';
import SecureScreen from '../pages/onboarding/secureAccount/index';
import ConfirmScreen from '../pages/onboarding/confirmPin/index';
import SignInScreen from '../pages/auth/signin/index';
import ForgotScreen from '../pages/auth/forgotPin/index';
import DashboardScreen from '../pages/dashboard/home/index'

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Verify" component={VerifyScreen} />
        <Stack.Screen name="BVN" component={BVNScreen} />
        <Stack.Screen name="Secure" component={SecureScreen} />
        <Stack.Screen name="Confirm" component={ConfirmScreen} />
        <Stack.Screen name="Login" component={SignInScreen} />
        <Stack.Screen name="Forgot" component={ForgotScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
