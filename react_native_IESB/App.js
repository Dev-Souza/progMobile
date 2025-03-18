import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

export default function App() {
  const nome = "Dev-Kauan"
  function alerta() {
    alert("Clicou no button")
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Image
          source={{ uri: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/09/GettyImages-1668971338-e1694439970587.jpg?w=1200&h=900&crop=1" }}
          style={styles.imageStyle}
        />
        <Image
          source={require("./images/ney.png")}
          style={styles.imageStyle}
        />
        <Image
          source={require("./images/ney.png")}
          style={styles.imageStyle}
        />
        <Image
          source={require("./images/ney.png")}
          style={styles.imageStyle}
        />
        <Image
          source={require("./images/ney.png")}
          style={styles.imageStyle}
        />
        <Image
          source={require("./images/ney.png")}
          style={styles.imageStyle}
        />
        <Image
          source={require("./images/ney.png")}
          style={styles.imageStyle}
        />
        <Text style={styles.text}>My project, Kauan S.</Text>
        <Text>Bem vindo {nome}</Text>
        <Button title='Clicar' onPress={alerta} />
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
  },
  text: {
    fontSize: 25,
    fontWeight: 600
  },
  imageStyle: {
    marginBottom: 30,
    width: 200,
    height: 200
  }
});
