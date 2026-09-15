import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';

import Home from './components/Home';
import Galeria from './components/Galeria';
import Sobre from './components/Sobre';
import Contato from './components/Contato'

const Drawer = createDrawerNavigator();

export default function App() {
  const dimensions = useWindowDimensions();
  return (
    <NavigationContainer>
      <Drawer.Navigator
      screenOptions={{
    drawerType: dimensions.width >= 768 ? 'slide' : 'back',
    drawerActiveTintColor: 'green',
    drawerActiveBackgroundColor: '#8dd06c',
    drawerLabelStyle: {
      color: 'black',
    },
    
  }}>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Galeria" component={Galeria}/>
        <Drawer.Screen name="Sobre" component={Sobre}/>
        <Drawer.Screen name="Contato" component={Contato}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5', // Cinza azulado muito claro e profissional
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 24,
    fontWeight: '800', // Extra bold para títulos
    color: '#1A1C20',  // Quase preto, mas com profundidade
    textAlign: 'center',
    marginBottom: 10,
    letterSpacing: -0.5, // Estética de design moderno (letras levemente juntas)
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24, // Bordas bem arredondadas
    padding: 25,
    width: '100%',
    maxWidth: 400,
    // Sombra refinada (iOS)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    // Sombra (Android)
    elevation: 4,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.8)', // Efeito de brilho na borda
  },
  subtitle: {
    fontSize: 16,
    color: '#65676B', // Cinza médio para textos secundários
    textAlign: 'center',
    lineHeight: 22,
  }
});