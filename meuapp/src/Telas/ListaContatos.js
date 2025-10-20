import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

export default function ListaContatos() {
  const [contatos, setContatos] = useState([]);

  const listaContatos = () => {
    axios
      .get("http://10.0.2.2:3000/contatos")
      .then((resposta) => {
        setContatos(resposta.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar contatos", error);
      });
  };

  useEffect(() => {
    listaContatos();
  }, []);

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <Text style={estilos.titulo}>Lista de Contatos</Text>

      {contatos.length > 0 ? (
        contatos.map((contato, index) => (
          <View key={index} style={estilos.card}>
            <Text style={estilos.nome}>👤 {contato.nome}</Text>
            <Text style={estilos.telefone}>📞 {contato.telefone}</Text>
          </View>
        ))
      ) : (
        <Text style={estilos.mensagem}>Nenhum contato disponível</Text>
      )}
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff6600',
    marginBottom: 25,
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginBottom: 15,
    elevation: 4, // sombra no Android
    shadowColor: '#000', // sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  nome: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  telefone: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  mensagem: {
    fontSize: 16,
    color: '#999',
  },
});
