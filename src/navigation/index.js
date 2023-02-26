import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ConfirmEmailScreen from '../screnns/confirmEmailScreen/ConfirmEmailScreen.js';
import ForgotPasswordScreen from '../screnns/ForgotPasswordScreen/ForgotPasswordScreen.js';
import NewPasswordScreen from '../screnns/NewPasswordScreen/NewPasswordScreen.js';
import SigninScreen from '../screnns/SigninScreen/Signin_Screen.js';
import {SignUpScreen} from '../screnns/SignUpScreen/index.js';
import Home from '../screnns/HomeScreen/index.js';
const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerٍShown: false}}>
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />

        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
