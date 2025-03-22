import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function JavaScriptComponent() {
    const nome = "Kauan"
    const idade = 20

    const maiorIdade = (age) => age >= 18 ? "Maior de idade" : "Menor de idade"
    const clickButton = () => alert("Clicou!!")
    return (
        <View>
            <Text>Dev {nome} e tenho apenas {idade} anos</Text>
            <Text>{maiorIdade(idade)}</Text>
            <Button title='Enviar' onPress={clickButton}></Button>
        </View>
    )
}

const styles = StyleSheet.create({})