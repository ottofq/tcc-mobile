import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';

const Login = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Login</Text>
      <Button
        onPress={() =>
          navigation.navigate('Questionário', {
            screen: 'step-1',
          })
        }
      >
        Avançar
      </Button>
    </View>
  );
};

export default Login;
