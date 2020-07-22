import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Intro from '../Intro';
import Done from '../Done';
import Step1 from '../Step1';
import Step2 from '../Step2';
import Step3 from '../Step3';
import Step4 from '../Step4';
import Step5 from '../Step5';
import Step6 from '../Step6';
import Step7 from '../Step7';
import Step8 from '../Step8';
import Step9 from '../Step9';

const Stack = createStackNavigator();

export default function Main() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerLeft: null,
      }}
      initialRouteName="Intro"
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Intro"
        component={Intro}
      />

      <Stack.Screen name="step-1" component={Step1} />
      <Stack.Screen name="step-2" component={Step2} />
      <Stack.Screen name="step-3" component={Step3} />
      <Stack.Screen name="step-4" component={Step4} />
      <Stack.Screen name="step-5" component={Step5} />
      <Stack.Screen name="step-6" component={Step6} />
      <Stack.Screen name="step-7" component={Step7} />
      <Stack.Screen name="step-8" component={Step8} />
      <Stack.Screen name="step-9" component={Step9} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Done"
        component={Done}
      />
    </Stack.Navigator>
  );
}
