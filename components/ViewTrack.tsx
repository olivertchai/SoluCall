import { useRouter } from 'expo-router';
import { Alert, Text, View, StyleSheet } from 'react-native';

import Track from '../types/Track';
import ButtonPost from '../components/ButtonPost';

interface ViewTrackProps {
  track: Track;
  onDelete: () => Promise<void>;
}

export default function ViewTrack({ track, onDelete }: ViewTrackProps) {
  const router = useRouter();

  return (
    <View style={styles.trackContainer}>
      <View style={styles.header}>
        <Text style={styles.idText}>ID: {track.id}</Text>
        <Text style={styles.titleText}>{track.title}</Text>
      </View>
      
      <View style={styles.body}>
        <Text style={styles.descriptionText}>
            Descrição: 
            <Text style={{ fontWeight: '400' }}> {track.description}</Text>
        </Text>
      </View>

      <View style={styles.actionsContainer}>
        <ButtonPost
          title="Ver Detalhes"
          onPress={() => {
            if (track.id) {
              router.push(`/pages/Tracks/${track.id}/`);
            } else {
              Alert.alert(
                'Erro na Visualização',
                'Não foi possível acessar os detalhes do chamado porque ele não tem um ID!'
              );
            }
          }}
          // Aplicando o novo estilo do botão de visualização
          style={[styles.button, styles.viewButton]}
        />

        <ButtonPost
          title="Excluir"
          onPress={async () => {
            try {
                      await onDelete();
                    } catch (error: any) {
                      Alert.alert("Error deleting book", error.toString());
                    }
          }}
          // Aplicando o novo estilo do botão de exclusão
          style={[styles.button, styles.deleteButton]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // ... [Estilos do Container e Texto Mantidos]
  trackContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10, 
    borderLeftWidth: 5,
    borderLeftColor: '#2972CD', 
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'column', 
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 5,
  },
  idText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
    marginBottom: 4,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left', 
  },
  body: {
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#555',
    fontWeight: 'bold', 
  },
  actionsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 10, 
  },
  // **NOVOS ESTILOS DE BOTÃO**
  button: {
    flex: 1, 
    // Altura reduzida de 40 para 36
    minHeight: 36, 
    borderRadius: 4, // Um pouco de arredondamento
    justifyContent: 'center', // Garante que o texto fique centralizado verticalmente
  },
  viewButton: {
    // Cor de fundo que harmoniza com a barra lateral (#2972CD)
    backgroundColor: '#2972CD', 
  },
  deleteButton: {
    // Cor vermelha mais suave que o 'darkred' original
    backgroundColor: '#cc3333',
  },
});