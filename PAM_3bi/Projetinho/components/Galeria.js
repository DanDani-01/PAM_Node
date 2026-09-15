import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Galeria=()=>{

const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Galeria</Text>
      <Text onPress={()=>{navigation.goBack()}}>Voltar</Text>
    </View>
  );
};


export default Galeria;