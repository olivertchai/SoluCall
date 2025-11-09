import { Stack } from "expo-router";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import ToggleThemeContextProvider from '../contexts/ToggleTheme';

export default function _layout() {
  return (
    <ToggleThemeContextProvider>
      <ActionSheetProvider>
        <Stack/>
      </ActionSheetProvider>
    </ToggleThemeContextProvider>
  )
}