import React, { useState } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

export default function AlterarExcluirContato() {
  const [nome, setNome] = useState('Marco Andrade');
  const [email, setEmail] = useState('mand@gmail.com');
  const [telefone, setTelefone] = useState('81 988553424');

  const alterarContato = () => {
    Alert.alert('Contato alterado com sucesso!');
  };

  const excluirContato = () => {
    Alert.alert('Contato excluído com sucesso!');
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
