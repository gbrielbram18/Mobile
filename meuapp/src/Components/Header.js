import React from 'react'
import {StyleSheet, Text, View } from "react-native"

export default function Header() {
  return (
    <View style={estilos.topo}>
        <Text style={estilos.tituloHeader}>Popeto sport clube brasil.</Text>
    </View>
  )
}


const estilos = StyleSheet.create({
    topo:{
        width: "100%",
        height: 120,
        backgroundColor:"#d7d7de",
        borderBottomColor:"yellow",
        borderBottomWidth:3,


    },
    tituloHeader:{
        width:"100%",
        textAlign:'center',
        color:"#ff7b00ff",
        fontWeight: "bold",
        fontSize: 25,
        paddingTop:40,
        textDecorationLine:"underline"
    }

});