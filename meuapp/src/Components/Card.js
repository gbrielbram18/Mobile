import React from 'react'
import { Button, StyleSheet,Text, View } from 'react-native'


export default function Card() {
  return (
    <View style={estilos.container}>
        <Text style={estilos.cardTitle}>sobre</Text>
        <Text style={estilos.cardContent}>Saiba mais sobre nós</Text>
        <Button
        title="Ir para sobre"
        onPress={()=> alert("Botão pressionado")}
        

        />
    </View>
  )
}


const estilos =StyleSheet.create({
    container:{
        backgroundColor:"#ffff",
        borderRadius:1.41,
        shadowColor:'orange',
        shadowOpacity: 0.2,
        padding:20,
        margin:20,
        elevation:3,

    },
    cardTitle:{
        fontSize:18,
        fontWeight:"bold",
        marginBottom:10,

    },
    cardContent:{
        fontSize:14,
        marginBottom:10,

    },
    

});
