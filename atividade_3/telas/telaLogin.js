import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Avatar, Input } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function TelaLogin({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Avatar
        rounded
        size="xlarge"
        title="MJ"
        source={{
          uri: 'https://avatars.githubusercontent.com/u/169060996?v=4',
        }}
      />

      <Input
        placeholder="Email"
        leftIcon={<MaterialIcons name="email" size={24} color="black" />}
        containerStyle={styles.inputContainer}
      />

      <Input
        placeholder="Senha"
        leftIcon={<MaterialIcons name="lock" size={24} color="black" />}
        secureTextEntry
        containerStyle={styles.inputContainer}
      />

      <TouchableOpacity
        style={styles.botao_1}
        onPress={() => navigation.navigate('ListarContatos')}
      >
        <Text style={styles.texto}>Logar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao_2}
        onPress={() => navigation.navigate('CadastroUsuario')}
      >
        <Text style={styles.texto}>Cadastre-se</Text>
      </TouchableOpacity>

      <Text
        style={styles.texto_senha}
        onPress={() => navigation.navigate('EsqueciSenha')}
      >
        Esqueci a Senha
      </Text>

      <StatusBar style="auto" />
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
  texto_senha: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 10,
  },
  inputContainer: {
    width: '70%',
    alignSelf: 'center',
  },
});
