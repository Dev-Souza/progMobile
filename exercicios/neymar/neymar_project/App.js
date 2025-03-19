import { StatusBar } from 'expo-status-bar';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  function ohNeymar(){
    alert("Oh Neymar! O homem mais fiel da terra!");
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.title}>Apresento a vocês</Text>
        <Text style={styles.subTitle}>Neymar Jr.</Text>
        <Image
          source={require('./images/Neymar2012.png')}
          style={styles.image}/>
        <Text>Maior jogador da história do Santos!</Text>
        <Text>Raio da Vila Belmiro</Text>
        <Text>Protagonista que o time do povo precisa!!!!!!!!!!</Text>
        <Text>Sem se esconder</Text>
        <Text>Sem se omitir</Text>
        <Image
          source={require('./images/neymarDeVolta.jpg')}
          style={styles.image}/>
        <Image
          source={require('./images/ney.png')}
          style={styles.image}/>
        <Image
          source={require('./images/ney3.png')}
          style={styles.image}/>
        <Image
          source={require('./images/ney4.png')}
          style={styles.image}/>
        <Image
          source={require('./images/ney5.png')}
          style={styles.image}/>
        <Button title='Clique aqui' onPress={ohNeymar}></Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
    backgroundColor: '#ccc'
  },
  image: {
    width: 250,
    height: 300,
    marginBottom: 20
  },
  title: {
    fontWeight: 900,
    fontSize: 30
  },
  subTitle: {
    fontWeight: 500,
    fontSize: 20
  }
});
