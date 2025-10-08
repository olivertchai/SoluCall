import React from 'react'
import { useState } from "react";
import { View, Text, StyleSheet } from 'react-native'
import { router, Stack } from "expo-router";

import Title from '../components/Title';
import FormInput from '../components/FormInput'
import ButtonPost from '../components/ButtonPost';
import ScreenWrapper from '../components/ScreenWrapper';
import Footer from '../components/Footer';

export default function RegisterTrack() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleprofile = () =>{
    router.push({
      pathname: "/pages/Dash",
      params:{
        id:1,
        title,
        description
      }
    })
  }  
return (
    <ScreenWrapper>
      <Stack.Screen options={{ title: "Cadastro" }} />
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Title fz={24} c="black">Registre um problema</Title>

          <FormInput
            label="Título"
            value={title}
            onChangeText={setTitle}
            style={styles.input}
          />

          <FormInput
            label="Descrição"
            value={description}
            onChangeText={setDescription}
            style={styles.input}
            multiline
            numberOfLines={4}
          />

          <ButtonPost
            c="black"
            bg="#blue"
            title="Registrar"
            onPress={handleprofile}
          />
        </View>
      </View>
      <Footer />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'space-between',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    gap: 20,
  },
  input: {
    marginTop: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    borderColor: '#ddd',
    borderWidth: 1,
  },

});