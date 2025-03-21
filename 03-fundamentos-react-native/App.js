import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FirstComponent text="Olá" titulo="Dev Kauan"></FirstComponent>
      <SecondComponent></SecondComponent>
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
