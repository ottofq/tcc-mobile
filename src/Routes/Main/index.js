import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Form from '../../pages/Forms/Main';
import StackNavigator from '../StackNavigator';

import {Title} from './styles';

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeBackgroundColor: '#6a82ab',
        }}
        drawerStyle={{
          backgroundColor: '#005ea3',
          width: 240,
        }}
        initialRouteName="Cardapio RU - CCA UFES">
        <Drawer.Screen
          options={{
            drawerLabel: () => <Title>Cardápio</Title>,
          }}
          name="Cardapio RU - CCA UFES"
          component={StackNavigator}
        />
        <Drawer.Screen
          options={{
            drawerLabel: () => <Title>Questionário</Title>,
          }}
          name="Questionário"
          component={Form}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
