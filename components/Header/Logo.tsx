import { View, Image, StyleSheet } from "react-native";
import React from "react";
import theme from "@/constants/theme";

import Title from "../Title";

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={require("../../assets/images/icon.png")}
      />

      <Title c={"white"} fz={16} fw={"bold"}>Início</Title>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.dimension.sm,
    // backgroundColor: "blue" --- IGNORE ---
  },
  image: { width: 50, height: 48 },
  text: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
