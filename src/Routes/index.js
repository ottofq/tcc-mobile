import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Form from '../pages/Forms/Main';
import StackNavigator from './StackNavigator';

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
            drawerLabel: () => (
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#fff',
                }}>
                Cardápio
              </Text>
            ),
          }}
          name="Cardapio RU - CCA UFES"
          component={StackNavigator}
        />
        <Drawer.Screen
          options={{
            drawerLabel: () => (
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#fff',
                }}>
                Questionário
              </Text>
            ),
          }}
          name="Questionário"
          component={Form}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
