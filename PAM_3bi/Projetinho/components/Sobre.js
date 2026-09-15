import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Sobre=()=>{
  
  const navigation = useNavigation();

  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Sobre</Text>
    <Button
      title='Galeria'
      onPress={()=>{navigation.navigate('Galeria')}}
    />
    </View>
  );
};

export default Sobre;