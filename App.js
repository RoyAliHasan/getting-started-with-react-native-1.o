import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';
import Home from './components/Home';

// Component 
export default function App() {
  return (
    <View style={styles.app}>
      <Text style={styles.app_text} >Hello World React Native</Text>
      <StatusBar style="auto" />
      <Home />
    </View>
  );
}

// Style Sheet
const styles = StyleSheet.create({
  app: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px',
    backgroundColor: 'purple'
  },
  app_text:{
    fontSize: '18px',
    color: 'white',
  }
})