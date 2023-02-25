/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ConfirmEmailScreen from './src/screnns/confirmEmailScreen/ConfirmEmailScreen.js';
import ForgotPasswordScreen from './src/screnns/ForgotPasswordScreen/ForgotPasswordScreen.js';
import NewPasswordScreen from './src/screnns/NewPasswordScreen/NewPasswordScreen.js';
import SigninScreen from './src/screnns/SigninScreen/Signin_Screen.js';
import {SignUpScreen} from './src/screnns/SignUpScreen/index.js';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.root}>
      <NewPasswordScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;
