import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { enableScreens } from 'react-native-screens';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCI from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import { View, ActivityIndicator } from 'react-native';

import authContext from '../../contexts/auth';

import FormNavigator from '../FormNavigator';
import BottomNavigator from '../BottomNavigator';

import Login from '../../pages/Login';
import Register from '../../pages/Register';
import Logout from '../../pages/Logout';

import { colors } from '../../styles';
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

const Stack = createStackNavigator();

const Routes = () => {
  const { auth, loading } = useContext(authContext);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {auth.token ? (
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
          <Drawer.Screen
            options={{
              drawerLabel: () => <S.Title>Questionário</S.Title>,
              drawerIcon: () => (
                <Icon name="question-answer" size={24} color="#fff" />
              ),
            }}
            name="form-register"
            component={FormNavigator}
          />
          <Drawer.Screen
            options={{
              drawerLabel: () => <S.Title>Logout</S.Title>,
              drawerIcon: () => <IconCI name="logout" size={24} color="#fff" />,
            }}
            name="logout"
            component={Logout}
          />
        </Drawer.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen name="forms" component={FormNavigator} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Routes;
