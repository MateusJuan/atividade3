import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Avatar, Input } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function TelaLogin({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function login() {
    axios.get('http://localhost:3000/usuarios')
      .then((response) => {
        const usuarios = response.data;
        const usuario = usuarios.find((u) => u.email === email && u.senha === senha);
        if (usuario) {
          navigation.navigate('ListarContatos');
        } else {
          alert('Email ou senha inválidos!');
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Erro ao conectar com o servidor.');
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Avatar
        rounded
        size="xlarge"
        title="MJ"
        source={{ uri: 'https://avatars.githubusercontent.com/u/169060996?v=4' }}
        containerStyle={{ marginBottom: 20 }}
      />

      <Input
        placeholder="Email"
        leftIcon={<MaterialIcons name="email" size={24} color="black" />}
        containerStyle={styles.inputContainer}
        value={email}
        onChangeText={setEmail}
      />

      <Input
        placeholder="Senha"
        leftIcon={<MaterialIcons name="lock" size={24} color="black" />}
        secureTextEntry
        containerStyle={styles.inputContainer}
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.botao_1} onPress={login}>
        <Text style={styles.texto}>Logar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao_2} onPress={() => navigation.navigate('CadastroUsuario')}>
        <Text style={styles.texto}>Cadastre-se</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '70%',
    alignSelf: 'center',
  },
  botao_1: {
    backgroundColor: 'green',
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  botao_2: {
    backgroundColor: 'green',
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  texto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
