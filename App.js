import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';
import Home from './components/Home';
import { Button } from 'react-native-web';

// Component 
export default function App() {
  return (
    <View style={styles.app}>
      <Text style={styles.app_text} >Hello World React Native</Text>
      <Button title="Learn More" color='blue' accessibilityLabel="Learn more about this purple button"
      />
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
    backgroundColor: '#999999'
  },
  app_text: {
    fontSize: '16px',
    color: 'white',
  }
})