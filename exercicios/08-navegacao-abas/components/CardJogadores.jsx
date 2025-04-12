import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Card, Text, Title } from 'react-native-paper'

export default function CardJogadores({jogador}) {
    const {nome, numero, imagem} = jogador
  return (
    <View style={{alignItems: 'center'}}>
      <Card style={styles.card}>
        <Card.Content>
            <Text variant='titleMedium'>{nome}</Text>
            <Text variant='bodyMedium'>Camisa {numero}</Text>
        </Card.Content>
        <Card.Cover source={{uri: imagem}} style={{width: 200}}/>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        marginBottom: 15
    },
})
