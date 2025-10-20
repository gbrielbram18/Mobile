import {useState} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import axios from 'axios';

export default function Faq() {
 const [faq, setFaq] = useState([]);

  const Faq = () => {
    axios
      .get("http://10.0.2.2:3000/faq")
      .then((res) => {
        setFaq(res.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar contatos", error);
      });
  };

  useEffect(() => {
    listaFaq();
  }, [faq]);
 
 return (
     <ScrollView contentContainerStyle={estilos.container}>
       <Text style={estilos.titulo}>Lista de Contatos</Text>
 
       {faq.length > 0 ? (
         faq.map((faq, index) => (
           <View key={index} style={estilos.card}>
             <Text style={estilos.nome}>👤 {faq.pergunta}</Text>
             <Text style={estilos.telefone}>📞 {faq.resposta}</Text>
           </View>
         ))
       ) : (
         <Text style={estilos.mensagem}>Nenhum contato disponível</Text>
       )}
     </ScrollView>
 
 
 
)}

const estilos = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    padding: 20,
    borderColor: '#000000ff', 
    borderWidth: 2,
     marginBottom: 20,

  },
  
  title: {
      textAlign:"center",
      fontSize:35

    },
    text: { 
    padding: 5,
    
    
   
    }
});