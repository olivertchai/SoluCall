import { View, Text ,Button} from 'react-native'
import React from 'react'
import { router,Stack, useLocalSearchParams } from "expo-router";

export default function changePassword() {
  const { id, name, password} = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: "Password Change" }} />
      <Text>Hello</Text>
      <Text>{name}</Text>
      <Text>{password}</Text>
      <Button title="Back" onPress={() => router.back()} />
    </View>
  )
}