import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Text, TextInput } from 'react-native-paper'
import { TextInputMask } from 'react-native-masked-text'
import AlunoService from '../services/AlunoService';

export default function AlunosFormsScreen({ navigation, route }) {

  const alunoAntigo = route.params || {}

  const [nome, setNome] = useState(alunoAntigo.nome || '');
  const [cpf, setCpf] = useState(alunoAntigo.cpf || '');
  const [email, setEmail] = useState(alunoAntigo.email || '');
  const [telefone, setTelefone] = useState(alunoAntigo.telefone || '');
  const [dataNascimento, setDataNascimento] = useState(alunoAntigo.dataNascimento || '');

  const salvar = async () => {
    let aluno = {
      nome,
      cpf,
      email,
      telefone,
      dataNascimento
    }

    if (!aluno.nome || !aluno.cpf || !aluno.email || !aluno.telefone || !aluno.dataNascimento) return alert("Preencha todos os campos!");
    
    if (alunoAntigo.id) {
      aluno.id = alunoAntigo.id
      await AlunoService.atualizar(aluno)
      alert("Aluno atualizado com sucesso!");
      navigation.reset({
        index: 0,
        routes: [{ name: 'AlunosListaScreen' }]
      })
    } else {
      await AlunoService.salvar(aluno)
      alert("Aluno cadastrado com sucesso!");
      navigation.reset({
        index: 0,
        routes: [{ name: 'AlunosListaScreen' }]
      })
    }

  }

  return (
    <View style={styles.container}>
      <Text variant='titleLarge'>Informe os dados:</Text>
      <Text>ID: {alunoAntigo.id || 'NOVO'}</Text>
      <TextInput
        style={styles.input}
        mode='outlined'
        label="Nome"
        placeholder='Informe o nome:'
        value={nome}
        onChangeText={text => setNome(text)}
      />
      <TextInput
        style={styles.input}
        mode='outlined'
        label="CPF"
        placeholder='Informe o CPF:'
        value={cpf}
        onChangeText={text => setCpf(text)}
        keyboardType='decimal-pad'
        render={(props) => (
          <TextInputMask
            {...props}
            type={'cpf'}
          />
        )}
      />
      <TextInput
        style={styles.input}
        mode='outlined'
        label="Email"
        placeholder='Informe o email:'
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType='email-address'
      />
      <TextInput
        style={styles.input}
        mode='outlined'
        label="Telefone"
        placeholder='Informe o telefone:'
        value={telefone}
        onChangeText={text => setTelefone(text)}
        keyboardType='numeric'
        render={(props) => (
          <TextInputMask
            {...props}
            type={'cel-phone'}
            options={{
              maskType: 'BRL',
              withDDD: true,
              dddMask: '(99)'
            }}
          />
        )}
      />
      <TextInput
        style={styles.input}
        mode='outlined'
        label="Data Nascimento"
        placeholder='Informe a data:'
        value={dataNascimento}
        onChangeText={text => setDataNascimento(text)}
        keyboardType='numeric'
        render={(props) => (
          <TextInputMask
            {...props}
            type={'datetime'}
            options={{
              format: 'DD/MM/YYYY'
            }}
          />
        )}
      />
      <Button
        style={styles.input}
        mode='contained'
        onPress={salvar}
      >Salvar</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10
  },
  input: {
    width: '90%',
    marginTop: 10
  }
})