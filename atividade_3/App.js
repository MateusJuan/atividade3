import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Login from './telas/telaLogin';
import ListarContatos from './telas/telaListarContatos';
import CadastroUsuario from './telas/telaCadastroUsuario';
import CadastroContato from './telas/telaCadastroContato';
import AlterarExcluirContato from './telas/telaAlterExcluContato';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ListarContatos"
          component={ListarContatos}
          options={({ navigation }) => ({
            headerTitle: 'Contatos',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: '#fff',
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: 15 }}
                onPress={() => navigation.navigate('CadastroContato')}
              >
                <Ionicons name="add" size={28} color="white" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="CadastroUsuario"
          component={CadastroUsuario}
          options={{
            headerTitle: 'Criar Conta',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="CadastroContato"
          component={CadastroContato}
          options={{
            headerTitle: 'Cadastrar Contato',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="AlterarExcluirContato"
          component={AlterarExcluirContato}
          options={{
            headerTitle: 'Alterar ou Excluir Contato',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
