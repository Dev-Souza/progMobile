import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Pessoa(props) {
    const { dados } = props
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Pessoa</Text>
            <Text>Nome: {dados.nome}</Text>
            <Text>idade: {dados.idade}</Text>
            <Image
                source={{ uri: dados.imagem }}
                style={{
                    width: 200,
                    height: 200
                }}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        borderWidth: 10,
        padding: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto: {
        fontSize: 30,
        fontWeight: 600
    }
})