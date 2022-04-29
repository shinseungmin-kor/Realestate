import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Gateway from '../screen/account/Gateway';
import Login from '../screen/account/Login';
import Signup from '../screen/account/Signup';

const NotUserNavigator = props => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Gateway"
        component={Gateway}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default NotUserNavigator;
