import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';

import {CustomInput} from '../../components/custominput/index.js';
import {CustomButton} from '../../components/custombutton/index.js';
import Navigation from '../../navigation/index.js';

const NewPasswordScreen = () => {
  const [code, setcode] = useState('');
  const [NewPassword, setNewPassword] = useState('');
  const onSubmitPressed = () => {
    console.warn('Registred');
    Navigation.navigate('Home');
  };

  const onSignInPressed = () => {
    console.warn('on Sign In pressed');
    Navigation.navigate('Signin');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={Styles.root}>
        <Text style={Styles.title}>Submit you're password </Text>
        <CustomInput
          placeholder={"Enter you're code "}
          value={code}
          setvalue={setcode}
          SecureTextEntry={false}
        />
        <CustomInput
          placeholder={"Enter you're NewPassword"}
          value={NewPassword}
          setvalue={setNewPassword}
          SecureTextEntry={false}
        />

        <CustomButton onPress={onSubmitPressed} text={'Submit'} />
        <CustomButton
          style={Styles.text}
          onPress={onSignInPressed}
          type="TIETARY"
          text={'Back to Sign In'}
          bgcolor="#FFFFFF"
          fgcolor="#4765A9"
        />
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
export default NewPasswordScreen;
