import { View,StyleSheet} from 'react-native'
import { useState ,useEffect} from "react";
import React from 'react'
import { router,Stack } from "expo-router";


import Title from '../../components/Title'
import FormInput from '../../components/FormInput'
import ButtonPost from '../../components/ButtonPost'
import ScreenWrapper from '../../components/ScreenWrapper';

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha , setSenha] = useState("");

  const [loginIsValid, setLoginIsValid] = useState(false);

  useEffect(() => {
    const isValid = email === "" && senha === "" ;
    setLoginIsValid(isValid);
    },
  ); 


  return (
    <ScreenWrapper >
      <Stack.Screen options={{ title: "Login" }} />
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Title c="black" fw="bold" fz={20}> SoluCall </Title>
                
        <View style={styles.inputContainer}>
          <FormInput label="Email" value={email} onChangeText={setEmail} />
          <FormInput label="Senha" value={senha} onChangeText={setSenha} secureTextEntry />

        </View>
          <ButtonPost 
            c={"white"} 
            bg={"gray"} 
            title='Login' 
            disabled = {!loginIsValid} 
              onPress={() => {
                router.push({
                  pathname: "/pages/Dash",
                });
              }}        
          >  
          </ButtonPost>
        </View>
      </View>
    </ScreenWrapper>
  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    backgroundColor: '#f0f2f5', // Um cinza claro para o fundo
  },
  formContainer: {
    width: '90%',
    padding: 24,
    backgroundColor: 'white',
    borderRadius: 12,
    // Sombra para dar profundidade (funciona melhor no iOS)
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Sombra para Android
    elevation: 5,
  },
  title: {
    textAlign: 'center',
    marginBottom: 24, // Espaço abaixo do título
  },
  inputContainer: {
    marginBottom: 20, // Espaço entre os inputs e o botão
  },
});