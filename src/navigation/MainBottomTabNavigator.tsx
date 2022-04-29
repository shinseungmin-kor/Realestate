import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screen/home/Home';
import Mypage from '../screen/mypage/Mypage';
import News from '../screen/news/News';
import SalesHelper from '../screen/saleshelper/SalesHelper';

const Tab = createBottomTabNavigator();

const MainBottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={'Home'}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="SalesHelper" component={SalesHelper} />
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Mypage" component={Mypage} />
    </Tab.Navigator>
  );
};

export default MainBottomTabNavigator;
