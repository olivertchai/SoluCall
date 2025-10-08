import { View, Text } from 'react-native'
import React from 'react'
import { Link ,Stack} from "expo-router";

import Login from '../app/pages/Login';
import ScreenWrapper from './components/ScreenWrapper';
export default function index() {
  return (
  <View>
    <Stack.Screen options={{ title: "Login" }} />
    <Login></Login>
  </View>
  )
}