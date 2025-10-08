import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { useLocalSearchParams } from "expo-router";

import Header from '../components/Header';
import Footer from '../components/Footer';
import ScreenWrapper from '../components/ScreenWrapper'

export default function Dash() {
  const { id, title, description} = useLocalSearchParams();  

  return (
    <ScreenWrapper>
      <Header></Header> 
       
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.id}>ID: {id} </Text>
          <Text style={styles.titulo}>Título: {title} </Text>
          <Text style={styles.descricao}>Descrição: {description}</Text>
        </View>
      </View>

      <Footer></Footer>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    },
  row: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },    
  id: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  titulo: {
    flex: 2,
    fontSize: 16,
    color: '#555',
  },
  descricao: {
    flex: 3,
    fontSize: 14,
    color: '#777',
  },  

});