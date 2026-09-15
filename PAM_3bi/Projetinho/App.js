import { StyleSheet, useWindowDimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './components/Home';
import Galeria from './components/Galeria';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import Produtos from './components/Produtos';
import Carrinho from './components/Carrinho';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function LojaTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Produtos" component={Produtos} />
      <Tab.Screen name="Carrinho" component={Carrinho} />
    </Tab.Navigator>
  );
}

export default function App() {
  const dimensions = useWindowDimensions();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerType: dimensions.width >= 768 ? 'slide' : 'back',
          drawerActiveTintColor: 'green',
          drawerActiveBackgroundColor: '#8dd06c',
          drawerLabelStyle: { color: 'black' },
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Loja" component={LojaTabs} />
        <Drawer.Screen name="Galeria" component={Galeria} />
        <Drawer.Screen name="Sobre" component={Sobre} />
        <Drawer.Screen name="Contato" component={Contato} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}