import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { sobreEmpresa } from '../../data/dataAbout';

export default function About() {
  return (
    <View style={styles.container}>
      <FlatList
        data={sobreEmpresa}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text style={styles.texto}>{item.texto}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  item: {
    marginBottom: 20,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  texto: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 20,
    color: '#444',
  },
});