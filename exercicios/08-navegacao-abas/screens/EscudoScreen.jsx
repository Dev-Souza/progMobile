import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Title } from 'react-native-paper';

export default function EscudoScreen() {

  const time = {
    nome: "Flamengo",
    escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
    };

  return (
    <View style={styles.container}>
      <Title style={styles.title} >{time.nome} Malvadeza</Title>
      <Image source={{uri: time.escudo}} style={{width: '85%', height: 300 }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 15,
    backgroundColor: '#FF6B6B'
  },
  title: {
    marginBottom: 5,
    fontSize: 30,
    fontWeight: 700
  }
})