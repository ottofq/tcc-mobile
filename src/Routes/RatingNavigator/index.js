import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import List from '../../pages/Rating/List';
import Create from '../../pages/Rating/Create';

const Stack = createStackNavigator();

const RatingNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="rating-list" component={List} />
      <Stack.Screen name="create-rating" component={Create} />
    </Stack.Navigator>
  );
};

export default RatingNavigator;
