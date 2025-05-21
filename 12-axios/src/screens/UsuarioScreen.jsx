import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function UsuarioScreen({navigation, route}) {
  const id = route.params
  const [userDetalhes, setUserDetalhes] = useState({})
  useEffect(() => {
    axios.get(`https://dummyjson.com/users/${id}`)
    .then(resposta => {
      setUserDetalhes(resposta.data)
    })
    .catch(erro => {
      console.log(erro)
    })
  }, [])
  return (
    <View>
      <Text>{userDetalhes.firstName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})