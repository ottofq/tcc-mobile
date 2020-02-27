import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Step1 from '../Step1';
import Step2 from '../Step2';
import Step3 from '../Step3';

const Stack = createStackNavigator();

export default function Main() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Questionario passo 1">
      <Stack.Screen name="Questionario passo 1" component={Step1} />
      <Stack.Screen name="Questionário passo 2" component={Step2} />
      <Stack.Screen name="Questionário passo 3" component={Step3} />
    </Stack.Navigator>
  );
}
