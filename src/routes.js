import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text} from 'react-native';

import Cardapio from './pages/Cardapio';
import Info from './pages/Info';
import Avaliacao from './pages/Avaliacao';

import Form from './pages/Forms/Main';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Cardapio"
      barStyle={{backgroundColor: '#004B82'}}>
      <Tab.Screen
        inactiveColor="#eee"
        options={{
          tabBarIcon: () => (
            <Icon name="restaurant-menu" size={24} color="#fff" />
          ),
          tabBarLabel: <Text style={{fontSize: 14}}>Cardapio</Text>,
        }}
        name="Cardapio"
        component={Cardapio}
      />
      <Tab.Screen
        name="Avaliar"
        component={Avaliacao}
        options={{
          tabBarIcon: () => <Icon name="star" size={24} color="#fff" />,
          tabBarLabel: <Text style={{fontSize: 14}}>Avaliar</Text>,
        }}
      />
      <Tab.Screen
        name="Info"
        component={Info}
        options={{
          tabBarIcon: () => <Icon name="info-outline" size={24} color="#fff" />,
          tabBarLabel: <Text style={{fontSize: 14}}>Info</Text>,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cardapio RU - CCA UFES">
        <Stack.Screen
          options={{
            headerLeft: null,
            headerTitleAlign: 'center',
            headerTitleStyle: {fontSize: 18, color: '#fff', fontWeight: 'bold'},
            headerStyle: {backgroundColor: '#004B82'},
          }}
          name="Cardapio RU - CCA UFES"
          component={BottomTabs}
        />

        <Stack.Screen
          options={{
            headerLeft: null,
            headerTitle: 'Questionário',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 22,
              color: '#fff',
              fontWeight: 'bold',
            },
            headerStyle: {backgroundColor: '#004B82'},
          }}
          name="Questionario"
          component={Form}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
