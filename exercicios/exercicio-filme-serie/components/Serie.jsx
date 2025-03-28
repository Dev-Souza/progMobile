import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Serie(props) {
  const { dados } = props
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textoSecondary}>Nome: {dados.nome}</Text>
        <Text style={styles.textoSecondary}>Ano: {dados.ano}</Text>
        <Text style={styles.textoSecondary}>Diretor: {dados.diretor}</Text>
        <Text style={styles.textoSecondary}>Temporadas: {dados.temporadas}</Text>
        <Image
          source={{ uri: dados.capa }} 
          style={{
            width: 300,
            height: 400
          }}/>
      </View>
    </ScrollView>
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