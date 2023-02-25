import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

import Logo from '../../../assets/images/logo.png';
import {CustomInput} from '../../components/custominput/index.js';
import {CustomButton} from '../../components/custombutton/index.js';
import {SocialSignInButton} from '../../components/socialSignInButton';
const SigninScreen = () => {
  const height = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onSignInPressed = () => {
    console.warn('sign in');
  };
  const onForgotPressed = () => {
    console.warn('Forgot password pressed');
  };

  const onSignUpPressed = () => {
    console.warn('Create an Account ');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={Styles.root}>
        <Image
          source={Logo}
          style={[Styles.logo, {height: height.height * 0.3}]}
          resizeMode="contain"
        />
        <CustomInput
          placeholder={"Enter you're username "}
          value={username}
          setvalue={setUsername}
          SecureTextEntry={false}
        />
        <CustomInput
          placeholder={'Enter your password'}
          value={password}
          setvalue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton onPress={onSignInPressed} text={'Button'} />
        <CustomButton
          onPress={onForgotPressed}
          text={"Forgot you're password ?"}
          type="TERTIARY"
        />
        <SocialSignInButton />

        <CustomButton
          onPress={onSignUpPressed}
          text={"Don't have an Account? Create one "}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};
const Styles = StyleSheet.create({
  root: {alignItems: 'center', padding: 20},
  logo: {
    width: '70%',
    maxWidth: 300,
    height: 200,
  },
});
export default SigninScreen;
