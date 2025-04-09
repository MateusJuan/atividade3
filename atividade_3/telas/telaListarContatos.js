import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const contatos = [
  { id: '1', nome: 'Marcos Andrade', telefone: '81 988553424' },
  { id: '2', nome: 'Patrícia Tavares', telefone: '81 998765332' },
  { id: '3', nome: 'Rodrigo Antunes', telefone: '81 987765525' },
];

export default function ListarContatos({ navigation }) {
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
      <TouchableOpacity onPress={() => navigation.navigate('AlterarExcluirContato')}>
        <FontAwesome5 name="pencil-alt" size={20} color="green" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id}
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
