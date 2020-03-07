import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Form from '../pages/Forms/Main';
import BottomNavigator from './BottomNavigator';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function StackNav() {
  return (
    <Stack.Navigator initialRouteName="Cardapio RU - CCA UFES">
      <Stack.Screen
        options={{
          headerLeft: null,
          headerTitleAlign: 'center',
          headerTitleStyle: {fontSize: 18, color: '#fff', fontWeight: 'bold'},
          headerStyle: {backgroundColor: '#004B82'},
        }}
        name="Cardapio RU - CCA UFES"
        component={BottomNavigator}
      />
    </Stack.Navigator>
  );
}

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
          component={StackNav}
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
