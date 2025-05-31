import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Card, Text } from 'react-native-paper'
import AlunoService from '../services/AlunoService';
import { Alert } from 'react-native';

export default function AlunosListaScreen({ navigation, route }) {

  useEffect(() => {
    buscarAlunos()
  }, [])

  const [alunos, setAlunos] = useState([]);

  async function buscarAlunos() {
    const listaAlunos = await AlunoService.listar()
    setAlunos(listaAlunos);
  }

  const removerAluno = (id) => {
    Alert.alert(
      "Confirmação",
      "Realmente quer excluir?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Excluir",
          onPress: async () => {
            try {
              await AlunoService.remover(id);
              alert("Aluno excluído com sucesso!");
              buscarAlunos();
            } catch (error) {
              console.error(error);
              alert("Erro ao excluir o aluno.");
            }
          },
          style: "destructive"
        }
      ]
    );
  };

  return (
    <View>
      <Button
        icon='plus'
        mode='contained'
        onPress={() => navigation.navigate('AlunosFormsScreen')}>Cadastrar</Button>
      <FlatList
        data={alunos}
        renderItem={({ item }) => (
          <Card style={{ margin: 10 }}>
            <Card.Content>
              <Text>ID: {item.id}</Text>
              <Text>Nome: {item.nome}</Text>
              <Text>CPF: {item.cpf}</Text>
              <Text>Email: {item.email}</Text>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => navigation.navigate('AlunosFormsScreen', item)}>Editar</Button>
              <Button onPress={() => removerAluno(item.id)}>Excluir</Button>
            </Card.Actions>
          </Card>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({})