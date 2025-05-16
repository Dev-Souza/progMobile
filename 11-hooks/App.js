import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import NomeNumero from './components/NomeNumero';
import Controle from './components/Controle';
import NumeroAleatorio from './components/NumeroAleatorio';
import Pessoa from './components/Pessoa';
import GeradorNumeroAleatorio from './components/GeradorNumeroAleatorio';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <ScrollView>
        <StatusBar style="auto" />
        <Pessoa />
        <GeradorNumeroAleatorio />
      </ScrollView>
    </PaperProvider>
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
