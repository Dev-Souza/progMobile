import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Card, Text } from 'react-native-paper'

export default function Controle() {

  const [volume, setVolume] = useState(0)

  function aumentar() {
    setVolume(volume + 1)
  }

  function diminuir() {
    if(volume > 0){
      setVolume(volume - 1)
    }else{
      alert("Já está em zero!")
    }
  }

  return (
    <View>
      <Card>
        <Card.Content>
          <Card.Title title="Componente Controle"/>
          <Text>Volume: {volume}</Text>
        </Card.Content>
        <Card.Actions>
          <Button
            mode='contained-tonal'
            icon='minus'
            onPress={diminuir}
          >Menos</Button>
          <Button
            mode='contained'
            icon='plus'
            onPress={aumentar}
          >Mais</Button>
        </Card.Actions>
      </Card>
    </View>
  )
}