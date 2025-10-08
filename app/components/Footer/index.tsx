import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { router,Stack } from "expo-router";
import theme from "@/contants/theme";
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function Footer() {
  return (
    <View style={styles.container}>
      <Entypo name="home" size={24} color="black" text="Início"
        onPress={() => {
          router.push({
            pathname: "/pages/Dash",
          });
        }}      
      />
      <Entypo name="add-to-list" size={24}              
        onPress={() => {
          router.push({
            pathname: "/pages/RegisterTrack",
          });
        }}  
      />
      <Ionicons name="exit" size={24} color="black" 
        onPress={() => {
          router.push({
            pathname: "/pages/Login",
          });
        }}      
      />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: theme.dimension.xs,
    justifyContent: "space-around",
    paddingHorizontal: theme.dimension.xs,
    backgroundColor: "#dfdfdf"
  },
});
