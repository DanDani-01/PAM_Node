import React,{useState} from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

// criar seu componentes personalizado

function Home() {
  const [nome , setNome] = useState(" ");
  
  return (
    <>
       <Text>Nome</Text>
        <TextInput
           style={{borderColor :"black",height:40,width:200,borderWidth:1,borderRadius:10,padding:5}}
            placeholder=" Digite Nome"
            value={nome}
            onChangeText={(text)=>{setNome(text)}}              
        />
        <Text>Olá {nome} </Text>
        <Text>Bem vindo ao Node</Text>
    </>
   )
}
export default Home;

/// fazer um css incorporado