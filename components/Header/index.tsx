// Header.tsx (MODIFICADO)
import { View, StyleSheet} from "react-native";
import React from "react";
import theme from "@/constants/theme";
import Logo from "./Logo";
import Actions from "./Actions";
import { useToggleThemeContext } from '../../contexts/ToggleTheme'; 
import HeaderRight from "./HeaderRight";

export default function Header() {

  const { theme: currentTheme } = useToggleThemeContext(); 
  return (
    <View style={[
      styles.container, 
      { backgroundColor: currentTheme.backgroundColor } 
    ]}>

      <HeaderRight />
      <View style={styles.topRow}> 
        <Logo />
        <Actions /> 
      </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // Não precisa de flexDirection: "row" aqui. 
    // Por padrão, o RN usa "column", o que é o que queremos (topRow acima de HeaderRight)
    padding: theme.dimension.xs,
    paddingHorizontal: theme.dimension.xs,
    // Remover justifyContent: "space-between" ou ajustar se necessário
  },
  
  // NOVO ESTILO: Contêiner para a primeira linha
  topRow: {
    flexDirection: "row", // Coloca Logo e Actions lado a lado
    justifyContent: "space-between", // Distribui o espaço entre Logo e Actions
    alignItems: "center",
    marginBottom: theme.dimension.xs, // Adiciona um pequeno espaço entre a linha de cima e a de baixo
  }
});