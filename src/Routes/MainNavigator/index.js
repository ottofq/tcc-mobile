import React, { useEffect, useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { enableScreens } from 'react-native-screens';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/MaterialIcons';

import userContext from '../../contexts/User';
import { colors } from '../../styles';
import FormNavigator from '../FormNavigator';
import BottomNavigator from '../BottomNavigator';
import logo from '../../../assets/images/logo.png';

import * as S from './styles';

enableScreens();

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <S.Container>
        <S.Logo source={logo} />
        <S.Divider />
      </S.Container>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Routes = () => {
  const { user } = useContext(userContext);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        drawerContentOptions={{
          activeBackgroundColor: '#6a82ab',
        }}
        drawerStyle={{
          backgroundColor: colors.primary,
          width: hp(35),
        }}
      >
        {user.id ? (
          <Drawer.Screen
            options={{
              drawerLabel: () => <S.Title>Cardápio</S.Title>,
              drawerIcon: () => (
                <Icon name="restaurant-menu" size={24} color="#fff" />
              ),
            }}
            name="Cardapio RU - CCA UFES"
            component={BottomNavigator}
          />
        ) : (
          <Drawer.Screen
            options={{
              drawerLabel: () => <S.Title>Questionário</S.Title>,
              drawerIcon: () => (
                <Icon name="question-answer" size={24} color="#fff" />
              ),
            }}
            name="Questionário"
            component={FormNavigator}
          />
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
