import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const custom_input = ({value, setvalue, placeholder, secureTextEntry}) => {
  return (
    <View style={Styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={setvalue}
        style={Styles.Input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 18,
    marginVertical: 5,
  },
  Input: {},
});
export default custom_input;
