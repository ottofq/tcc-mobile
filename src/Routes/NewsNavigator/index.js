import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import List from '../../pages/News/List';
import Details from '../../pages/News/Details';

const Stack = createStackNavigator();

const NewsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="news-list" component={List} />
      <Stack.Screen
        options={{ headerShown: true }}
        name="news-details"
        component={Details}
      />
    </Stack.Navigator>
  );
};

export default NewsNavigator;
