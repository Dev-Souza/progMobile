import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import ThirdComponent from './components/ThirdComponent';
import JavaScriptComponent from './components/JavaScriptComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FirstComponent text="Olá" titulo="Dev Kauan"></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      <JavaScriptComponent></JavaScriptComponent>
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
