import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import BottomNavigator from '../BottomNavigator';

import {ButtonLeft} from './styles';

const Stack = createStackNavigator();

export default function StackNavigator({navigation}) {
  function handleButton() {
    navigation.openDrawer();
  }

  return (
    <Stack.Navigator initialRouteName="Cardapio RU - CCA UFES">
      <Stack.Screen
        options={{
          headerLeft: () => (
            <ButtonLeft onPress={handleButton}>
              <Icon name="menu" size={36} color="#fff" />
            </ButtonLeft>
          ),
          headerTitleAlign: 'center',
          headerTitle: 'Cardápio RU - CCA UFES',
          headerTitleStyle: {
            fontSize: 24,
            color: '#fff',
            fontFamily: 'PTSans-Bold',
          },
          headerStyle: {backgroundColor: '#004B82'},
        }}
        name="Cardapio RU - CCA UFES"
        component={BottomNavigator}
      />
    </Stack.Navigator>
  );
}
