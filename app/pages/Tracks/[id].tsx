import { View, Text } from 'react-native';
import React from 'react';
import ViewTrack from '@/components/ViewTrack';
import { Stack, useLocalSearchParams } from 'expo-router';
import useDocument from '@/firebase/hooks/useDocument';
import Track from '@/types/Track';
import Loading from '@/components/Loading';

export default function _screen() {
  const { id } = useLocalSearchParams();
  const { data, upsert, loading } = useDocument<Track>('Tracks', id as string);
  console.log('data:', data);

  if (loading) return <Loading />;
  if (!data) return <Text>Dados indisponíveis para o id {id}!</Text>;

  const handleDelete = async (): Promise<void> => {
    console.log(`Função onDelete chamada para o ID: ${id}.`);
  };
  return (
    <View>
      <Stack.Screen
        options={{
          title: data.title,
        }}
      />

      <ViewTrack
        // Você precisa garantir que o 'data' tenha as propriedades 'id', 'title', 'description'
        // Se 'data' for do tipo 'Track', basta passá-lo.
        track={data}
        onDelete={handleDelete}
      />

      {/* <ViewTrack
        track={data}
        onDelete={() => {
          console.log('delete: ', id);
          remove(id as string);
        }}
      /> */}
    </View>
  );
}
