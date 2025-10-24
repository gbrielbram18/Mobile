import React from 'react'
import { Text, View,StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Card from "../Components/Card"
import { ScrollView,View } from 'react-native/';


export default function Home() {
  const navigation = useNavigation();

  return (
    <ScrollView >

      <View>
        <Card
          title="Sobre"
          content="Saiba mais sobre nós e nossos serviços."
          textButton="Ir para Sobre *"
          onPress={() => navigation.navigate('Sobre')}
        />
        <Card
          title="Faq"
          content="Saiba mais Faq"
          textButton="Ir para Faq"
          onPress={() => navigation.navigate('Faq')}
        />
        <Card
          title="Lista Contatos"
          content="Lista de contatos cadastrados"
          textButton="Ir para Lista"
          onPress={() => navigation.navigate('ListaContatos')}
        />
        <Card
          title="Cadastro"
          content="Ir para cadastrados"
          textButton="Ir para cadastro"
          onPress={() => navigation.navigate('Cadastro')}
        />
        <Card
          title="Produtos"
          content="Ir para Produtos"
          textButton="Ir para Produtos"
          onPress={() => navigation.navigate('Produtos')}
        />
      </View>
    </ScrollView>
  )
};