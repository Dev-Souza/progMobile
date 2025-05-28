import { FlatList, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Card, Text } from 'react-native-paper'

export default function AlunosListaScreen({ navigation, route }) {

  const [alunos, setAlunos] = useState([
    {
      id: '1',
      nome: "Kauan",
      cpf: '00100100101',
      email: 'kauan@gmail.com',
      dataNascimento: '02/10/2002',
      telefone: '(99) 99999-0000'
    },
    {
      id: '2',
      nome: "Jessica",
      cpf: '00100100101',
      email: 'jessica@gmail.com',
      dataNascimento: '05/04/2003',
      telefone: '(99) 99999-0000'
    }
  ]);

  return (
    <View>
      <Button
        icon='plus'
        mode='contained'
        onPress={() => navigation.navigate('AlunosFormsScreen')}>Cadastrar</Button>
        <FlatList 
          data={alunos}
          renderItem={({item}) => (
            <Card style={{margin: 10}}>
              <Card.Content>
                <Text>ID: {item.id}</Text>
                <Text>Nome: {item.nome}</Text>
                <Text>CPF: {item.cpf}</Text>
                <Text>Email: {item.email}</Text>
              </Card.Content>
              <Card.Actions>
                <Button>Editar</Button>
                <Button>Excluir</Button>
              </Card.Actions>
            </Card>
          )}
        />
    </View>
  )
}

const styles = StyleSheet.create({})