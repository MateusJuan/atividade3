import axios from 'axios';
import React, { useState } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CadastroContato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  function criarContato() {
    axios.post("http://localhost:3000/contatos", {
      nome,
      email,
      telefone
    }).then(function(response){
      console.log(response.data);
      alert('Contato criado com sucesso!');
    }).catch(function(error){
      console.error(error);
      alert('Erro ao criar contato!');
    });
  }

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

      <TouchableOpacity style={styles.botao} onPress={criarContato}>
        <Text style={styles.textoBotao}>Salvar</Text>
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
  },
  botao: {
    backgroundColor: 'green',
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
