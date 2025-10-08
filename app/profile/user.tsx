import { View, Text ,Button} from 'react-native'
import React from 'react'
import { Link ,Stack,useRouter} from "expo-router";

export default function profile() {
  const router=useRouter();

  const handleprofile = () =>{
    router.push({
      pathname: "/profile/changePassword",
      params:{
        id:1,
        name:"wagner",
        password:"123"
      }
    })
  }
  
    return (
    <View>
      <Stack.Screen options={{ title: "User Change" }} />
      <Text>Link para mudar senha</Text>
      <Link href="/profile/changePassword?id:1+name:wagner+password:123">Trocar Senha</Link>
      <Text>Botão para mudar senha</Text>
      <Button onPress={handleprofile} title="Mudar Senha" />
    </View>
  )
}