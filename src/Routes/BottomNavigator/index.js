/* eslint-disable react/prop-types */
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCI from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import Menu from '../../pages/Menu';
import News from '../NewsNavigator';
import Rating from '../RatingNavigator';
import GeneralInfo from '../../pages/GeneralInfo';
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
        shifting
        activeColor="#fff"
        inactiveColor={colors.grayMedium}
      >
        <Tab.Screen
          options={{
            tabBarLabel: <S.Title>Cardápio</S.Title>,
            tabBarIcon: ({ color }) => (
              <Icon name="restaurant-menu" size={24} color={color} />
            ),
          }}
          name="Cardapio"
          component={Menu}
        />
        <Tab.Screen
          name="Avaliar"
          component={Rating}
          options={{
            tabBarLabel: <S.Title>Avaliar</S.Title>,
            tabBarIcon: ({ color }) => (
              <Icon name="star" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="News"
          component={News}
          options={{
            tabBarLabel: <S.Title>Notícias</S.Title>,
            tabBarIcon: ({ color }) => (
              <IconCI
                name="newspaper-variant-outline"
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Info Gerais"
          component={GeneralInfo}
          options={{
            tabBarLabel: <S.Title>Info Gerais</S.Title>,
            tabBarIcon: ({ color }) => (
              <Icon name="info-outline" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomNavigator;
