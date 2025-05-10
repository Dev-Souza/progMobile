import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { Avatar, Card, Text, Title } from 'react-native-paper'

export default function TituloScreen() {

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
    }
  ];

  return (
    <View>
      <FlatList
        data={titulos}
        renderItem={({ item }) => (
          <Card>
            <Card.Title title={item.nome} />
            <Card.Title title="Anos" />
            <FlatList
              data={item.anos}
              horizontal
              renderItem={({ item }) => <Text style={{ marginRight: 10 }}>{item}</Text>}
            />
          </Card>
        )} />
    </View>
  )
}

const styles = StyleSheet.create({})