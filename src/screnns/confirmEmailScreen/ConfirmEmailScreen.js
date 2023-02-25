import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';

import {CustomInput} from '../../components/custominput/index.js';
import {CustomButton} from '../../components/custombutton/index.js';

const ConfirmEmailScreen = () => {
  const [code, setcode] = useState('');

  const onConfirmPressed = () => {
    console.warn('Registred');
  };

  const onResendPressed = () => {
    console.warn('on Resend Pressed ');
  };
  const onSignInPressed = () => {
    console.warn('on Sign In pressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={Styles.root}>
        <Text style={Styles.title}>Confirm you're Email </Text>
        <CustomInput
          placeholder={"Enter you're code "}
          value={code}
          setvalue={setcode}
          SecureTextEntry={false}
        />

        <CustomButton onPress={onConfirmPressed} text={'Confirm'} />
        <CustomButton
          style={Styles.text}
          onPress={onResendPressed}
          type="SECONDARY"
          text={'On Resend pressed'}
          bgcolor="#FFFFFF"
          fgcolor="#4765A9"
        />
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
export default ConfirmEmailScreen;
