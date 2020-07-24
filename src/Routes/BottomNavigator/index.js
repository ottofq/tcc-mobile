import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import Menu from '../../pages/Menu';
import News from '../../pages/News';
import Rating from '../../pages/Rating';
import { colors } from '../../styles';

import * as S from './styles';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigator = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header
        handleMenu={() => navigation.openDrawer()}
        title="CARDÁPIO RU CCA UFES"
      />
      <Tab.Navigator
        initialRouteName="Cardapio"
        barStyle={{ backgroundColor: colors.primary }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Icon name="restaurant-menu" size={24} color="#fff" />
              ) : (
                <Icon
                  name="restaurant-menu"
                  size={24}
                  color={colors.grayLight}
                />
              ),
            tabBarLabel: <S.Title>Cardápio</S.Title>,
          }}
          name="Cardapio"
          component={Menu}
        />
        <Tab.Screen
          name="Avaliar"
          component={Rating}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Icon name="star" size={24} color="#fff" />
              ) : (
                <Icon name="star" size={24} color={colors.grayLight} />
              ),
            tabBarLabel: <S.Title>Avaliar</S.Title>,
          }}
        />
        <Tab.Screen
          name="Info"
          component={News}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Icon name="info-outline" size={24} color="#fff" />
              ) : (
                <Icon name="info-outline" size={24} color={colors.grayLight} />
              ),
            tabBarLabel: <S.Title>Notícias</S.Title>,
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomNavigator;
