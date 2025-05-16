import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Card, Text } from 'react-native-paper'

export default function GeradorNumeroAleatorio() {
  const [numeroAleatorio, setNumeroAleatorio] = useState(0)
  const [lista, setLista] = useState([])


  const gerar = () => {
    const numeroAleatorio = Math.floor(Math.random() * 101)
    setNumeroAleatorio(numeroAleatorio)
    setLista([...lista, numeroAleatorio])
  }

  const resetar = () => {
    setNumeroAleatorio(0)
    setLista([])
  }
  return (
    <View>
      <Card>
        <Card.Content>
          <Text variant='displaySmall'>Gerador de Números:</Text>
          <Text variant='displaySmall'>{numeroAleatorio}</Text>
        </Card.Content>
        <Card.Actions>
          <Button
            mode='contained'
            onPress={gerar}
          >Gerar</Button>
        </Card.Actions>
      </Card>
      <Card>
        <Card.Content>
          <Text variant='displaySmall'>Histórico:</Text>
          {lista.map(item => <Text>{item}</Text>)}
        </Card.Content>
        <Card.Actions>
          <Button
            mode='contained'
            onPress={resetar}
          >Resetar</Button>
        </Card.Actions>
      </Card>
    </View>
  )
}