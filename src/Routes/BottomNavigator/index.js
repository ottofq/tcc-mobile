import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header';
import Cardapio from '../../pages/Cardapio';
import Avisos from '../../pages/Avisos';
import Avaliacao from '../../pages/Avaliacao';

import {Title} from './styles';

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigator({navigation}) {
  return (
    <>
      <Header
        handleMenu={() => navigation.openDrawer()}
        title="CARDÁPIO RU CCA UFES"
      />
      <Tab.Navigator
        initialRouteName="Cardapio"
        barStyle={{backgroundColor: '#004B82'}}>
        <Tab.Screen
          inactiveColor="#eee"
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <Icon name="restaurant-menu" size={24} color="#fff" />
              ) : (
                <Icon name="restaurant-menu" size={24} color="#bebebe" />
              ),
            tabBarLabel: <Title>Cardápio</Title>,
          }}
          name="Cardapio"
          component={Cardapio}
        />
        <Tab.Screen
          name="Avaliar"
          component={Avaliacao}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <Icon name="star" size={24} color="#fff" />
              ) : (
                <Icon name="star" size={24} color="#bebebe" />
              ),
            tabBarLabel: <Title>Avaliar</Title>,
          }}
        />
        <Tab.Screen
          name="Info"
          component={Avisos}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <Icon name="info-outline" size={24} color="#fff" />
              ) : (
                <Icon name="info-outline" size={24} color="#bebebe" />
              ),
            tabBarLabel: <Title>Avisos</Title>,
          }}
        />
      </Tab.Navigator>
    </>
  );
}
