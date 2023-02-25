import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';

import {CustomInput} from '../../components/custominput/index.js';
import {CustomButton} from '../../components/custombutton/index.js';

const ForgotPasswordScreen = () => {
  const [username, setusername] = useState('');

  const onResetPressed = () => {
    console.warn('Registred');
  };

  const onSendPressed = () => {
    console.warn('on Send Pressed ');
  };
  const onSignInPressed = () => {
    console.warn('on Sign In pressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={Styles.root}>
        <Text style={Styles.title}>Reset you're password </Text>
        <CustomInput
          placeholder={"Enter you're username "}
          value={username}
          setvalue={setusername}
          SecureTextEntry={false}
        />

        <CustomButton onPress={onResetPressed} text={'Reset'} />

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
export default ForgotPasswordScreen;
