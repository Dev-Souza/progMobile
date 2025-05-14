import { View } from 'react-native'
import React, { useState } from 'react'
import { Button, Card, Text } from 'react-native-paper'

export default function NumeroAleatorio() {

    const [numero, setNumero] = useState(0)
    function gerarNumero() {
        const numeroAleatorio = Math.floor(Math.random() * 101)
        setNumero(numeroAleatorio)
    }

    return (
        <View>
            <Card>
                <Card.Content>
                    <Card.Title title="Componente NumeroAleatorio" />
                    <Text variant='displayMedium'>Número Aleatório: {numero}</Text>
                </Card.Content>
                <Card.Actions>
                    <Button 
                        onPress={gerarNumero}    
                    >Gerar Número</Button>
                </Card.Actions>
            </Card>
        </View>
    )
}