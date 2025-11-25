import { ActivityIndicator, View } from 'react-native';

import globalStyles from '../styles/globalStyles';
import { Stack } from 'expo-router';

export default function Loading() {
  return (
    <View style={globalStyles.container}>
      <Stack.Screen
        options={{
          title: '...',
        }}
      />

      <ActivityIndicator />
    </View>
  );
}
