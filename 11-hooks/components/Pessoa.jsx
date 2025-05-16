import { View } from 'react-native'
import React, { useState } from 'react'
import { Button, Card, Text } from 'react-native-paper'

export default function Pessoa() {
    const [pessoa, setPessoa] = useState({})

    const revelarPessoa = () => {
        const novaPessoa = {
            nome: "Kauan",
            idade: 20,
            imagem: "https://i.pinimg.com/736x/9c/ec/a5/9ceca52da9b5d991ddda0f05dbb0b17f.jpg"
        }
        setPessoa(novaPessoa)
    }

    const revelarPessoa2 = () => {
        const novaPessoa = {
            nome: "Souza",
            idade: 19,
            imagem: "https://i.pinimg.com/736x/a8/0e/45/a80e45cda6b6cfeb5076e2bf6df91750.jpg"
        }
        setPessoa(novaPessoa)
    }

    return (
        <View>
            <Card>
                <Card.Content>
                    <Text variant='displaySmall'>Componente Pessoa</Text>
                    <Text variant='displaySmall'>Nome: {pessoa.nome}</Text>
                    <Text variant='displaySmall'>Idade: {pessoa.idade}</Text>
                    <Card.Cover source={{ uri: pessoa.imagem }} />
                </Card.Content>
                <Card.Actions>
                    <Button
                        mode='contained'
                        onPress={revelarPessoa}
                    >Revelar</Button>
                    <Button
                        mode='contained-tonal'
                        onPress={revelarPessoa2}
                    >Revelar2</Button>
                </Card.Actions>
            </Card>
        </View>
    )
}