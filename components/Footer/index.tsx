import { View, StyleSheet} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import theme from "@/constants/theme";
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import useAuth from "@/firebase/hooks/useAuth";
import { useModal } from "../Modal/ModalProvider";


export default function Footer() {
  const router = useRouter();
  const { logout } = useAuth();
  const modal = useModal();
  

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
        onPress={async () => {
          try {
            await logout();
            router.replace("/");
          } catch (error: any) {
            modal.show("Logout error");
          }
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
