import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Contato=({route})=>{

const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Contato</Text>
    </View>
  );
};

export default Contato;