import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BottomNavigator from '../BottomNavigator';

const Stack = createStackNavigator();

export default function StackNavigator() {
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
