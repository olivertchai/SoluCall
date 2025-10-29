import { View, Text, ColorValue, StyleSheet, TouchableOpacityProps, TouchableOpacity} from 'react-native'
import React from 'react'

type ButtonPostProps = {
    c?:ColorValue;
    bg?:ColorValue;
    title?:string;
} & TouchableOpacityProps;

export default function ButtonPost({c ,bg, title ,...rest} : ButtonPostProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{backgroundColor:bg || "blue"}}
      {...rest}
      >
      <Text style={[styles.text, { color: c }]}>{title}</Text>
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({  
  container: {
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },  
})