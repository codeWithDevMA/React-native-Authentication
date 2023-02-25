import {Pressable, Text, StyleSheet} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, text, type, bgcolor, fgcolor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgcolor ? {backgroundColor: bgcolor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgcolor ? {color: fgcolor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3B71F3',
    width: '100%',
    borderRadius: 5,
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
  },
  container_SECONDARY: {
    borderColor: '#3B71F3',
    borderWidth: 2,
  },
  container_PRIMARY: {
    backgroundColor: '#3B71F3',
  },
  container_TERTIARY: {backgroundColor: '#FFFFFF'},
  text: {fontWeight: 'bold', color: '#FFFFFF'},
  text_TERTIARY: {color: 'gray', fontWeight: 'bold'},
});

export default CustomButton;
