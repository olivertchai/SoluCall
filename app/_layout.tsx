import { Stack } from "expo-router";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import ToggleThemeContextProvider from '../contexts/ToggleTheme';
import Modal from "@/components/Modal/Modal";
import { ScrollView } from "react-native";

export default function _layout() {
  return (
    <ToggleThemeContextProvider>
      <ActionSheetProvider>
        <Modal.Provider>
        <Stack/>
        </Modal.Provider>
      </ActionSheetProvider>
    </ToggleThemeContextProvider>
  )
}