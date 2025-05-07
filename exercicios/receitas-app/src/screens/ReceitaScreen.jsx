import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Card, Title } from 'react-native-paper'

export default function ReceitaScreen({navigation, route}) {
  const detailReceita = route.params
  return (
    <View>
      <Card>
        <Card.Content>
          <Text>NOME: {detailReceita.nome}</Text>
          <Text>TEMPO: {detailReceita.tempoPreparo}</Text>
          <Text>PORÇÕES: {detailReceita.porcoes}</Text>
          <Card.Cover source={{uri: detailReceita.imagem}}/>
          <Title>Ingredientes</Title>
          <FlatList 
            data={detailReceita.ingredientes}
            renderItem={({item}) => <Text>{item}</Text>}/>
          <Title>Modo de preparo</Title>
          <FlatList 
            data={detailReceita.modoPreparo}
            renderItem={({item}) => <Text>{item}</Text>}
          />
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => navigation.goBack()}>Voltar</Button>
        </Card.Actions>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({})