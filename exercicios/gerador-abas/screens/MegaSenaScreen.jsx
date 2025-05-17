import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Card, Text } from 'react-native-paper';
import { FlatList } from 'react-native';

export default function MegaSenaScreen() {
    const [jogoGerado, setJogoGerado] = useState([]);
    const [jogosMegaSena, setJogosMegaSena] = useState([]);

    const gerarJogo = () => {
        let novoJogo = [];
        while (novoJogo.length < 6) {
          let numero = Math.floor(Math.random() * 60) + 1;
          if (!novoJogo.includes(numero)) {
            novoJogo.push(numero);
          }
        }
        setJogoGerado(novoJogo)
        setJogosMegaSena([...jogosMegaSena, novoJogo])
    }

    const zerar = () => {
        setJogoGerado([])
        setJogosMegaSena([])
    }
    return (
        <View>
            <Card>
                <Card.Content>
                    <Text variant='displaySmall'>Jogo:</Text>
                    {jogoGerado.map((num, index) => <Text key={index}>{num}</Text>)}
                </Card.Content>
                <Card.Actions>
                    <Button
                        mode='contained'
                        onPress={gerarJogo}
                    >Gerar jogo</Button>
                </Card.Actions>
            </Card>
            <Card>
                <Card.Content>
                    <Text variant='displaySmall'>Histórico:</Text>
                    <FlatList 
                        data={jogosMegaSena}
                        renderItem={({item}) => <Text style={{margin: 5}}>{item.join(' ')}</Text>}
                    />
                </Card.Content>
                <Card.Actions>
                    <Button
                        mode='contained'
                        onPress={zerar}    
                    >Zerar</Button>
                </Card.Actions>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({})