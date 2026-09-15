import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Produtos = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela de Produtos</Text>
      <Text onPress={() => navigation.navigate('Carrinho')}>Ir para o Carrinho</Text>
    </View>
  );
};

export default Produtos;