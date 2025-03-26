import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Pessoa from './components/Pessoa';

export default function App() {
  const listaJogadores = [
    {
      nome: "Neymar",
      idade: 33,
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW_Z5il2X7HH0ZGTJUJeHb0g3f05119j7kMQ&s'
    },
    {
      nome: "Cristiano Ronaldo",
      idade: 42,
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW_Z5il2X7HH0ZGTJUJeHb0g3f05119j7kMQ&s'
    },
    {
      nome: "Lionel Messi",
      idade: 40,
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW_Z5il2X7HH0ZGTJUJeHb0g3f05119j7kMQ&s'
    }
  ]
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {listaJogadores.map((jogador) => {
        return (
          <Pessoa dados={jogador}></Pessoa>
        )
      })}
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
