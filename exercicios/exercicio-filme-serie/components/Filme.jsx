import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Filme(props) {
  const { dados } = props
  return (
    <View style={styles.container}>
      <Text style={styles.textoSecondary}>Nome: {dados.nome}</Text>
      <Text style={styles.textoSecondary}>Ano: {dados.ano}</Text>
      <Text style={styles.textoSecondary}>Diretor: {dados.diretor}</Text>
      <Text style={styles.textoSecondary}>Tipo: {dados.tipo}</Text>
      <Image
        source={{uri: dados.capa}}
        style={{
          width: 300,
          height: 400
        }}></Image>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    borderWidth: 1,
    backgroundColor: '#fff'
  },
  textoSecondary: {
    fontSize: 20
  }
})