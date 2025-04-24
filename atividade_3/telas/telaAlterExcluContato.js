import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

export default function AlterarExcluirContato({ route }) {
  const { id } = route.params;
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  useEffect(() => {
    // Buscar o contato pelo ID
    axios.get(`http://localhost:3000/contatos/${id}`)
      .then((response) => {
        const contato = response.data;
        setNome(contato.nome);
        setEmail(contato.email);
        setTelefone(contato.telefone);
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
        alert('Erro ao carregar o contato.');
      });
  }, [id]);

  const alterarContato = () => {
    const contatoAlterado = { nome, email, telefone };

    axios.put(`http://localhost:3000/contatos/${id}`, contatoAlterado)
      .then(() => {
        Alert.alert('Contato alterado com sucesso!');
      })
      .catch((error) => {
        console.error("Erro ao alterar o contato:", error);
        alert('Erro ao alterar o contato.');
      });
  };

  const excluirContato = () => {
    axios.delete(`http://localhost:3000/contatos/${id}`)
      .then(() => {
        Alert.alert('Contato excluído com sucesso!');
      })
      .catch((error) => {
        console.error("Erro ao excluir o contato:", error);
        alert('Erro ao excluir o contato.');
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
        style={styles.input}
      />

      <TouchableOpacity style={styles.botaoAlterar} onPress={alterarContato}>
        <Text style={styles.textoBotao}>Alterar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoExcluir} onPress={excluirContato}>
        <Text style={styles.textoBotao}>Excluir</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  botaoAlterar: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  botaoExcluir: {
    backgroundColor: 'red',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotao: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
