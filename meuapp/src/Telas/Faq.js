import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function Faq() {
  return (
    <View style={estilos.container}>
        <Text style={estilos.title} >Faq</Text>
        <Text style={estilos.text}>Somos um time de futebol focados em popeto onde 
          organizamos um campeonato mundial de popeto</Text>
    </View>
  )
}

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
    width: "auto",    
    padding: 5,
    
    
   
    }
});