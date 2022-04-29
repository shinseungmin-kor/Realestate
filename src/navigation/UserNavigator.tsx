import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MainBottomTabNavigator from './MainBottomTabNavigator';

const UserNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName={'MainBottomTabNavigator'}>
      <Stack.Screen
        name="MainBottomTabNavigator"
        component={MainBottomTabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default UserNavigator;
