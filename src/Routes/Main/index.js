import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Form from '../../pages/Forms/Main';
import InfoNavigator from '../../pages/Info';
import StackNavigator from '../StackNavigator';
import logo from '../../../assets/images/logo.png';

import {Container, Title, Logo, Divider} from './styles';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Container>
        <Logo source={logo} />
        <Divider />
      </Container>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
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
            drawerIcon: () => (
              <Icon name="restaurant-menu" size={24} color="#fff" />
            ),
          }}
          name="Cardapio RU - CCA UFES"
          component={StackNavigator}
        />
        <Drawer.Screen
          options={{
            drawerLabel: () => <Title>Questionário</Title>,
            drawerIcon: () => (
              <Icon name="question-answer" size={24} color="#fff" />
            ),
          }}
          name="Questionário"
          component={Form}
        />
        <Drawer.Screen
          options={{
            drawerLabel: () => <Title>Informações Gerais</Title>,
            drawerIcon: () => <Icon name="info" size={24} color="#fff" />,
          }}
          name="Info"
          component={InfoNavigator}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
