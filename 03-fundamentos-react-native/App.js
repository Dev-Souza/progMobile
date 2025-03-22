import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import ThirdComponent from './components/ThirdComponent';
import JavaScriptComponent from './components/JavaScriptComponent';
import Perfil from './components/Perfil';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FirstComponent text="Olá" titulo="Dev Kauan"></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      <JavaScriptComponent></JavaScriptComponent>
      <Perfil
        nome="Kauan"
        idade="20"
        email="kauan@gmail.com"></Perfil>
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
