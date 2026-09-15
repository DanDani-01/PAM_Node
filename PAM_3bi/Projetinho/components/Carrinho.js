import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Carrinho = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela do Carrinho</Text>
      <Text onPress={() => navigation.navigate('Produtos')}>Voltar para Produtos</Text>
    </View>
  );
};

export default Carrinho;