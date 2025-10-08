import {
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable
} from "react-native";
import React from "react";
import theme from "@/contants/theme";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { router } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from "@expo/vector-icons/AntDesign";



export default function Actions() {

  const { showActionSheetWithOptions } = useActionSheet();

  const handleOpen = () => {
    const options = ["Perfil", "Configurações", "Sobre" ,"Cancel"];
    const cancelButtonIndex = 3;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        title: "Menu",
      },
      (selectedIndex) => {
        if (selectedIndex === 0) {
          // Perfil
          console.log("Perfil selecionado");
        } else if (selectedIndex === 1) {
          // Configurações
          console.log("Configurações selecionadas");
        } else if (selectedIndex === 2) {
          // Sobre
            router.push({
              pathname: "/pages/About",
            })
        }
      }
    );
  };  
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <AntDesign name="search1" size={24} color="white" />
      </TouchableOpacity>

      
        <TouchableOpacity onPress={handleOpen}>    
          <Entypo name="menu" size={28} color="white" />
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
