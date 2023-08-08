import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// This ecample is a simple counter: when the button is pressed it increments a counder by one
export default function App() {
  const [count, setCount] = useState(0); // Declaration of count state
  return (
    <View style={styles.container}>
      <Text>Count: {count} </Text>
      <Button onPress={() => setCount(count + 1)} title='Add One'></Button>
    </View>
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
