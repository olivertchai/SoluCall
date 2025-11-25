// Import libraries
import React from 'react'
import { useState } from "react";
import { View, StyleSheet, Alert } from 'react-native'
import { router, Stack } from "expo-router";

// Import components
import Title from '../../components/Title';
import FormInput from '../../components/FormInput'
import ButtonPost from '../../components/ButtonPost';
import ScreenWrapper from '../../components/ScreenWrapper';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import useCollection from "../../firebase/hooks/useCollection";
import Track from '../../types/Track';

export default function RegisterTrack() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { data, create, remove, refreshData, loading } =
  useCollection<Track>("Tracks");

return (
    <ScreenWrapper>
      <Stack.Screen options={{ title: "Cadastro" }} />
      <Header></Header>
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
            c="white"
            bg="#2972CD"
            title="Registrar"
            onPress={async () => {
              try {
                await create({
                  title,
                  description               
                });
                await refreshData();
              } catch (error: any) {
                Alert.alert("Create Book error", error.toString());
              }
              router.push("./Dash");
            }}
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