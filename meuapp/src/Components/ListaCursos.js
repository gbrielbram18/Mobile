import {Text,View, StyleSheet} from "react-native"
import { FlatList } from "react-native/types_generated/index";

export default function ListaCursos() {
  return (
    <View style={estilos.container}>
      <FlatList
      
        data={["React Native", "Node.js", "MongoDB", "HTML popeto"]}
        renderItem={({item}) => <Text> -{item}</Text> }
      />
    </View>
    
  )
}


const estilos = StyleSheet.create({
  container:{
    marginTop: 40,
    padding:20,



  }

});