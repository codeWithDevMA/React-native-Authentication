import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';

import {CustomInput} from '../../components/custominput/index.js';
import {CustomButton} from '../../components/custombutton/index.js';
import {SocialSignInButton} from '../../components/socialSignInButton/index';
import Navigation from '../../navigation/index.js';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setrepeatPassword] = useState('');
  const [Email, setEmail] = useState('');
  const onRegisterPressed = () => {
    console.warn('Registred');
    Navigation.navigate('ConfirmEmail');
  };
  const onTermsofUSe = () => {
    console.warn('on terms of use pressed');
  };
  const onPrivacyPolicy = () => {
    console.warn('on privicy policy pressed');
  };
  const onSignInPressed = () => {
    console.warn('on Sign In pressed ');
    Navigation.navigate('Signin');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={Styles.root}>
        <Text style={Styles.title}>Create an Account</Text>
        <CustomInput
          placeholder={"Enter you're username "}
          value={username}
          setvalue={setUsername}
          SecureTextEntry={false}
        />
        <CustomInput
          placeholder={"Enter you're Email "}
          value={Email}
          setvalue={setEmail}
          SecureTextEntry={false}
        />
        <CustomInput
          placeholder={'Enter your password'}
          value={password}
          setvalue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder={'Please confirm password'}
          value={repeatPassword}
          setvalue={setrepeatPassword}
          secureTextEntry={true}
        />
        <CustomButton onPress={onRegisterPressed} text={'Register'} />
        <Text style={Styles.text}>
          By registering , you confirm that you accept our{' '}
          <Text style={Styles.link} onPress={onTermsofUSe}>
            Terms of use{' '}
          </Text>{' '}
          and
          <Text style={Styles.link} onPress={onPrivacyPolicy}>
            {' '}
            privicy policy
          </Text>
        </Text>
        <CustomButton
          style={Styles.text}
          onPress={onSignInPressed}
          type="TIETARY"
          text={'have An Account ? Sign In'}
          bgcolor="#FFFFFF"
          fgcolor="#4765A9"
        />
        <SocialSignInButton />
      </View>
    </ScrollView>
  );
};
const Styles = StyleSheet.create({
  root: {alignItems: 'center', padding: 20},
  text: {
    marginVertical: 15,
    color: 'gray',
  },
  link: {
    color: '#FDB075',
  },
  title: {fontSize: 24, fontWeight: 'bold', margin: 10, color: '#051c60'},
});
export default SignUpScreen;
