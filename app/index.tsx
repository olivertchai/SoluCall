import { View } from 'react-native'
import React from 'react'
import { Stack} from "expo-router";
import Login from './pages/Login';

export default function Index() {
  return (
  <View>
    <Stack.Screen options={{ title: "Login" }} />
        <Login></Login>
  </View>
  )
}