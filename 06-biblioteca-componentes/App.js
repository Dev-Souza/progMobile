import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider, Card, Title, Paragraph, Text, Divider, Button } from 'react-native-paper';

export default function App() {
  const lista = ["Uva", "Maçã", "Banana", "Laranja"]
  return (
    <PaperProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Button mode='contained' onPress={() => alert("Press")}>CLIQUE AQUI!</Button>
        <Button mode='contained' icon={'camera'} onPress={() => alert("Press")}>CLIQUE AQUI!</Button>
        <Button mode='contained-tonal'>CLIQUE AQUI!</Button>
        <Button mode='elevated'>CLIQUE AQUI!</Button>
        <Button mode='outlined'>CLIQUE AQUI!</Button>
        <Button mode='text'>CLIQUE AQUI!</Button>
        <Text variant='titleLarge'>Menino Ney</Text>
        <Divider style={{ backgroundColor: "black", width: "80%" }} />
        <Text variant='titleMedium'>Menino Ney</Text>
        <Card>
          <Card.Content>
            <Title>Titulo</Title>
            <Paragraph>Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph </Paragraph>
          </Card.Content>
          <Card.Cover source={{uri: 'https://i.pinimg.com/474x/9a/a7/c9/9aa7c9656614abf9bbbcc8425c878dca.jpg'}}/>
        </Card>
      </View>
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
