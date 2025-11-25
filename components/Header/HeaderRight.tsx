// HeaderRight.tsx (Versão Final com Alinhamento Esquerdo)
import { Text, View, StyleSheet } from "react-native";
import useAuth from "../../firebase/hooks/useAuth";
import { useToggleThemeContext } from '../../contexts/ToggleTheme'; 

export default function HeaderRight() {
  const { user} = useAuth();
  const { theme: currentTheme } = useToggleThemeContext();

  return (
    <View style={styles.container}>
      <Text style={[styles.emailText, { color: currentTheme.textColor }]}>
        {user?.email}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row", 
        alignItems: "center", 
        gap: 8,
        // *** ESTES DOIS SÃO CRUCIAIS PARA ALINHAR À ESQUERDA ***
        width: '100%', // 1. Ocupa a largura total
        justifyContent: 'flex-end', // 2. Alinha o conteúdo à esquerda
    },
    emailText: {
        fontSize: 12,
        fontWeight: 'bold',
    }
});