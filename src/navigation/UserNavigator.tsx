import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import News from '../screen/news/News';
import Calculator from '../screen/saleshelper/Calculator';
import SalesHelperDetail from '../screen/saleshelper/SalesHelperDetail';
import MainBottomTabNavigator from './MainBottomTabNavigator';

const UserNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName={'MainBottomTabNavigator'}>
            <Stack.Screen
                name="MainBottomTabNavigator"
                component={MainBottomTabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SalesHelperDetail"
                component={SalesHelperDetail}
            />
            <Stack.Screen
                name="Calculator"
                component={Calculator}
            />
        </Stack.Navigator>
    );
};

export default UserNavigator;
