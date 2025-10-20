import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Image1 from "../../assets/img-1.jpg";
import Image2 from "../../assets/img-2.jpg";

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

      <View style={estilos.card}>
        <Text style={estilos.titulo}>📱 Informações</Text>
        <Text style={estilos.texto}>
          <Text style={estilos.label}>Nome: </Text>{info.nomeApp}
        </Text>
        <Text style={estilos.texto}>
          <Text style={estilos.label}>Versão: </Text>{info.versao}
        </Text>
        <Text style={estilos.texto}>
          <Text style={estilos.label}>Desenvolvido por: </Text>{info.desenvolvedor}
        </Text>
      </View>

      <View style={estilos.footer}>
        <Text style={estilos.footerText}>Fut Popeto © 2025 — Todos os direitos reservados</Text>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  header: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff6600',
    marginTop: 20,
    marginBottom: 15,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#ff6600',
    resizeMode: 'cover',
    elevation: 4, // sombra Android
    shadowColor: '#000', // sombra iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff6600',
    marginBottom: 10,
    textAlign: 'center',
  },
  texto: {
    fontSize: 16,
    color: '#333',
    marginBottom: 6,
    textAlign: 'center',
  },
  label: {
    fontWeight: 'bold',
    color: '#444',
  },
  footer: {
    marginTop: 30,
    paddingVertical: 15,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 13,
    color: '#999',
  },
});
