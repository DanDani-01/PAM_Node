import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home'




export default function App() {
  
  return (
    <View style={styles.container}>
        <Home />
        
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});