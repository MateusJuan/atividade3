import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function ListarContatos({ navigation }) {
  const [contatos, setContatos] = useState([]);

  useEffect(() => {
    listarContatos();
  });
  
  function listarContatos() {
    axios.get("http://localhost:3000/contatos")
      .then((response) => {
        console.log("Contatos recebidos:", response.data);
        setContatos(response.data);
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
        alert('Erro ao conectar com o servidor.');
      });
  }
  

  const renderItem = ({ item }) => (
    <View style={styles.contato}>
      <Avatar
        rounded
        icon={{ name: 'user', type: 'font-awesome' }}
        size="medium"
        containerStyle={{ backgroundColor: '#2196F3' }}
      />
      <View style={styles.info}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.telefone}>{item.telefone}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('AlterarExcluirContato', { id: item.id })}>
        <FontAwesome5 name="pencil-alt" size={20} color="green" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  contato: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    elevation: 2,
  },
  info: {
    flex: 1,
    marginLeft: 15,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  telefone: {
    fontSize: 14,
    color: '#333',
  },
});
