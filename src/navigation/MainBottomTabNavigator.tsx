import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screen/home/Home';
import Mypage from '../screen/mypage/Mypage';
import News from '../screen/news/News';
import SalesHelper from '../screen/saleshelper/SalesHelper';
import TabBar from './TabBar';

const Tab = createBottomTabNavigator();

const MainBottomTabNavigator = props => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      tabBar={props => <TabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="SalesHelper" component={SalesHelper} />
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Mypage" component={Mypage} />
    </Tab.Navigator>
  );
};

export default MainBottomTabNavigator;
