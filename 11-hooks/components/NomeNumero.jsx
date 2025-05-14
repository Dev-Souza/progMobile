import { View } from 'react-native'
import React, { useState } from 'react'
import { Button, Card, Text } from 'react-native-paper'

export default function NomeNumero() {
  const [nome, setNome] = useState(null)
  const [numero, setNumero] = useState(null)

  function mostrarNomeNumero() {
    setNome("Kauan") 
    setNumero(20)
  }

  return (
    <View>
      <Card>
        <Card.Content>
        <Card.Title title="Componente NomeNumero"/>
        <Text variant='displayMedium'>Nome: {nome}</Text>
        <Text variant='displayMedium'>Número: {numero}</Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={mostrarNomeNumero}>Mostrar</Button>
        </Card.Actions>
      </Card>
    </View>
  )
}