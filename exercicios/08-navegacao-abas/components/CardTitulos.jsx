import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { Card, Text } from 'react-native-paper'

export default function CardTitulos({ titulo }) {
  const { nome, anos } = titulo
  return (
    <View style={styles.container}>
      <Card style={{width: 300, marginBottom: 10}}>
        <Card.Content>
          <Text variant='titleMedium'>{nome}</Text>
          <FlatList
              horizontal
              data={anos}
              renderItem={({item}) => <Text style={styles.ano}>{item}</Text>} />
        </Card.Content>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  ano: {
    fontSize: 14,
    marginRight: 5,
    color: '#B00020',
  },
})