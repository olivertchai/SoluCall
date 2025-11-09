import {
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import theme from "@/constants/theme";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { router } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from "@expo/vector-icons/AntDesign";
import { useToggleThemeContext } from '../../contexts/ToggleTheme'; 


export default function Actions() {
  
  const { showActionSheetWithOptions } = useActionSheet();
  const { toggleTheme, theme: currentTheme } = useToggleThemeContext();
  
  // Opcional: Determinar o nome do tema atual para exibir na opção
  const isDark = currentTheme.backgroundColor === '#0f0f0f';
  const themeOptionText = isDark ? "☀️ Tema Claro" : "🌙 Tema Escuro";


  const handleOpen = () => {
    const options = [
        themeOptionText, // Opção 0: Alternar Tema
        "Perfil",       // Opção 1
        "Configurações",// Opção 2
        "Sobre",        // Opção 3
        "Cancelar"      // Opção 4
    ];
    const cancelButtonIndex = 4;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        title: "Menu",
      },
      (selectedIndex) => {
        if (selectedIndex === 0) {
          // 4. Lógica para Alternar Tema
          console.log("Alternar Tema selecionado");
          toggleTheme(); // Chama a função para mudar o tema
          
        } else if (selectedIndex === 1) {
          // Perfil (Índice anterior era 0)
          console.log("Perfil selecionado");
          
        } else if (selectedIndex === 2) {
          // Configurações (Índice anterior era 1)
          console.log("Configurações selecionadas");
          
        } else if (selectedIndex === 3) {
          // Sobre (Índice anterior era 2)
            router.push({
              pathname: "/pages/About",
            })
                    
        }
      }
    );
  };  
  
return (
    <View style={[styles.container, { backgroundColor: currentTheme.backgroundColor }]}>
      <TouchableOpacity>
        <AntDesign name="search1" size={24} color={currentTheme.textColor} /> 
      </TouchableOpacity>

      <TouchableOpacity onPress={handleOpen}>    
          <Entypo name="menu" size={28} color={currentTheme.textColor} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.dimension.sm,
  },
});