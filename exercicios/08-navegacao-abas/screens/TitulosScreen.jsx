import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper';
import CardTitulos from '../components/CardTitulos'

export default function TitulosScreen() {

  const titulos = [
    {
    nome: "Campeonato Brasileiro",
    anos: [1980, 1982, 1983, 1992, 2009, 2019, 2020]
    },
    {
    nome: "Copa Libertadores da América",
    anos: [1981, 2019, 2022]
    },
    {
    nome: "Copa do Brasil",
    anos: [1990, 2006, 2013, 2022, 2024]
    },
    {
    nome: "Supercopa do Brasil",
    anos: [2020, 2021, 2025]
    },
    ];

  return (
    <View style={{backgroundColor: '#FF6B6B', height: '100%'}}>
      <Text style={styles.title}>Titulos do Malvadeza</Text>
      <FlatList 
        data={titulos}
        renderItem={({item}) => <CardTitulos titulo={item}/>}/>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 700,
    paddingTop: 10,
    paddingBottom: 10
  }
})