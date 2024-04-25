import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  const prueba = () => {
    console.log(`mierda`)
  }

  return (
    <TouchableOpacity style={styles.container} onPress={prueba}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
