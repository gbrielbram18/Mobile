import React, { useState } from 'react'
import { Button, Text, TextInput, View, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
  


export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const navigation = useNavigation();

 const enviarContato = async () => {
    if (!nome || !telefone) {
      Alert.alert("Erro, Por favor, preencha todos os campos!");
      return;
    }
    
    const novoContato = { nome, telefone };

    axios.post('http://10.0.2.2:3000/contatos', novoContato)
      .then(resposta => {
        if (resposta.status === 201) {
          setNome('');
          setTelefone('');
          navigation.navigate("ListaContatos");
        } else {
          Alert.alert("Erro, falha ao adicionar contato.");
        }
      });
  }


  return (
    <View style={estilos.container}>
      <Text style={estilos.label}>Nome:</Text>
      <TextInput
        style={estilos.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome"
      />

      <Text style={estilos.label}>Telefone:</Text>
      <TextInput 
        style={estilos.input}
        value={telefone}
        onChangeText={setTelefone}
        placeholder="Digite o telefone"
      />

      {/* <Button title="Cadastrar" onPress={enviarContato} /> */}

      <TouchableOpacity style={estilos.button} onPress={enviarContato}>
        <Text style={estilos.titleButton}>Clique aqui</Text>
        <Ionicons name="accessibility-outline" size={32} color="blue" />
      </TouchableOpacity>
    </View>
  )
}

const estilos = StyleSheet.create({
    container: {
        padding: 20
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
        fontWeight: "bold"
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: "#fff"
    },
    button: {
      backgroundColor: "orange",
      padding: 12,
      borderRadius: 8,
      alignItems: 'center'
    },
    titleButton: {
      color: '#000',
      fontSize: 16,
      fontWeight: 'bold'
    }
});