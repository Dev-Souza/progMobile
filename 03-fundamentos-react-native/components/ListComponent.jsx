import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ListComponent() {
    const lista = ["Uva", "Maçã", "Banana", "Laranja"]
    return (
        <View style={styles.container}>
            {lista.map((fruta) => {
                <Text style={styles.texto}>{fruta}</Text>
            })}

            {lista.map((fruta) => {
                return (
                    <View style={styles.containerAmarelo}>
                        <Text style={styles.texto}>{fruta}</Text>
                    </View>
                )
            })}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerAmarelo: {
        backgroundColor: "yellow",
         alignItems: 'center',
        justifyContent: 'center'
    },
    texto: {
        fontSize: 30,
        fontWeight: 600
    }
})