import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Perfil(props) {
  return (
    <View>
      <Text style={styles.textAccount}>Perfil</Text>
      <Text style={styles.textSecondary}>Nome: {props.nome}</Text>
      <Text style={styles.textSecondary}>Idade: {props.idade}</Text>
      <Text style={styles.textSecondary}>Email: {props.email}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    textAccount: {
        fontSize: 40,
        fontWeight: 600
    },
    textSecondary: {
        fontSize: 25
    }
})