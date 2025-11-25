// Import lib
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
// Import Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScreenWrapper from '../../components/ScreenWrapper';
import ViewTrack from '@/components/ViewTrack';
import useCollection from '@/firebase/hooks/useCollection';
import Track from '@/types/Track';
import Loading from '@/components/Loading';
import { Stack } from 'expo-router';

export default function Dash() {
  // O código do componente em si está correto e utiliza os hooks do Firebase
  const { data, remove, refreshData, loading } = useCollection<Track>('Tracks');

  return (
    <ScreenWrapper>
      <Stack.Screen options={{
        title:"Dash"
      }}/>
      <Header />

      <View style={styles.listContainer}>
        {loading ? (
          <Loading />
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <ViewTrack
                track={item}
                onDelete={async () => {
                  await remove(item.id!);
                  await refreshData();
                }}
              />
            )}
            keyExtractor={(item) => item.id!}
            // Adicionado contentContainerStyle para aplicar padding interno à lista
            contentContainerStyle={styles.listContent}
          />
        )}
      </View>

      <Footer />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1, // ⬅️ CRUCIAL: Garante que o FlatList ocupe todo o espaço.
    backgroundColor: '#f5f5f5', // Fundo claro para o corpo da lista
  },
  
  // listContent: Adiciona padding ao redor do conteúdo DA LISTA (FlatList).
  listContent: {
    paddingHorizontal: 20, // Padding lateral para o conteúdo da lista
    paddingVertical: 10, // Padding superior/inferior para o conteúdo
    flexGrow: 1, 
  },

});