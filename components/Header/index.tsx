import { View, StyleSheet} from "react-native";
import React from "react";
import theme from "@/constants/theme";
import Logo from "./Logo";
import Actions from "./Actions";
import { useToggleThemeContext } from '../../contexts/ToggleTheme'; 

export default function Header() {

  const { theme: currentTheme } = useToggleThemeContext(); 
  return (
    <View style={[
      styles.container, 
      { backgroundColor: currentTheme.backgroundColor } // Sobrescreve a cor de fundo!
    ]}>
      <Logo />
      <Actions /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: theme.dimension.xs,
    justifyContent: "space-between",
    paddingHorizontal: theme.dimension.xs,

  },
});