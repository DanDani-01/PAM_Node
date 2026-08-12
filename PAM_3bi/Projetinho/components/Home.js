import {React, useState} from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

// criar seu componentes personalizado

function Home() {
  const [nome , setNome] = useState(" ");
  const [imageSource, setImageSource] = useState({});

  function trocarImagem()  {
      if(nome == "Arthurzão Games"){
         setImageSource(require('../img/arthur.webp'))
      }
      if (nome == null){
         setImageSource(require('../img/semimagem.jpg'))
      }
   }
  
  return (
    <>
       <Text>Nome</Text>
        <TextInput
           style={{borderColor :"black",height:40,width:200,borderWidth:1,borderRadius:10,padding:5}}
            placeholder=" Digite Nome"
            value={nome}
            onChangeText={(text)=>{setNome(text)}}              
        />
        <Button tittle="Trocar Imagem" onPress={trocarImagem} />
        <image 
        src = {{imageSource}}
        />
        <Text>Olá {nome} </Text>
        <Text>Bem vindo ao Node</Text>
    </>
   )
}
export default Home;

/// fazer um css incorporado