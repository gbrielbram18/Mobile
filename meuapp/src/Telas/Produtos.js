import React from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Card from "../Components/Card"

export default function Sobre() {
  const info = {
    nomeApp: "Fut Popeto FC",
    versao: "1.0.0",
    desenvolvedor: "Gabriel Brambila",
  };

  return (
    <ScrollView style={estilos.container}>
      <Text style={estilos.header}>⚽ Sobre o App</Text>

      <View style={estilos.imageContainer}>
        <Image source={Image1} style={estilos.image} />
        <Image source={Image2} style={estilos.image} />
      </View>

      <View style={estilos.footer}>
        <Text style={estilos.footerText}>Fut Popeto © 2025 — Todos os direitos reservados</Text>
      </View>
    </ScrollView>
  );
}