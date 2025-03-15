import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  const nome = "Dev-Kauan"
  function alerta() {
    alert("Clicou no button")
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image 
        source={{uri:"https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/09/GettyImages-1668971338-e1694439970587.jpg?w=1200&h=900&crop=1"}}
        style={{
          width: 200,
          height: 200
        }}  
      />
      
      <Text>My project, Kauan S.</Text>
      <Text>Bem vindo {nome}</Text>
     
      <Button title='Clicar' onPress={alerta}/>
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
