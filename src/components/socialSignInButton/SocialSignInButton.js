import {View, Text} from 'react-native';
import React from 'react';
import {CustomButton} from '../custombutton';

const SocialSignInButton = () => {
  const onFacebookSignIn = () => {
    console.warn('Signed with  Facebook');
  };
  const onGoogleSignIn = () => {
    console.warn('Signed with  Google');
  };
  const onAppleSignIn = () => {
    console.warn('Signed with Apple');
  };
  return (
    <>
      <CustomButton
        onPress={onFacebookSignIn}
        text={'Sign With Facebook'}
        bgcolor="#E7E4F4"
        fgcolor="#4765A9"
      />
      <CustomButton
        onPress={onGoogleSignIn}
        text={'Sign In With Google'}
        bgcolor="#FAE9EA"
        fgcolor="#DD4D44"
      />
      <CustomButton
        onPress={onAppleSignIn}
        text={'Sign In With Apple'}
        bgcolor="#e3e3e3"
        fgcolor="#363636"
      />
    </>
  );
};

export default SocialSignInButton;
