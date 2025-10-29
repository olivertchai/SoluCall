import { View, TextInput, TextInputProps , StyleSheet} from 'react-native';
import React from 'react';
import Title from '../components/Title';

type FormInputProps = {
  label?: string;
  error?: string;
} & TextInputProps;

export default function FormInput({label , error , ...rest}:FormInputProps) {
  return (
    <View style={styles.container}>
      {label && <Title c="black" >{label}</Title>}

      <TextInput 
        style={styles.inputContainer}
        {...rest}
        placeholderTextColor="lightgray"
      ></TextInput>

      {error && (
        <Title c="red" fz={12}> {error}</Title>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  inputContainer: {
    backgroundColor: "#DFDFDF",
    borderRadius: 3,
    borderWidth: 0.5,
    color: "black",
  },
});