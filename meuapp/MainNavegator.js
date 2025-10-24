import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/Telas/Home';
import Sobre from './src/Telas/Sobre';
import Faq from './src/Telas/Faq';
import ListaContatos from './src/Telas/ListaContatos';
import Cadastro from './src/Telas/Cadastro';
import Produtos from './src/Telas/Produtos'

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
           <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
           <Stack.Screen name="Sobre" component={Sobre} />
           <Stack.Screen name="Faq" component={Faq} />
           <Stack.Screen name="ListaContatos" component={ListaContatos} />
           <Stack.Screen name="Cadastro" component={Cadastro}/>
           <Stack.Screen name="Produtos" component={Produtos}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}