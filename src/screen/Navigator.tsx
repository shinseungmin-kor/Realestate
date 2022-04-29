import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import NotUserNavigator from '../navigation/NotUserNavigator';
import UserNavigator from '../navigation/UserNavigator';

const Navigator = () => {
  const [isUser, setIsUser] = useState(false);

  return (
    <>
      <NavigationContainer>
        {isUser ? <UserNavigator /> : <NotUserNavigator />}
      </NavigationContainer>
    </>
  );
};

export default Navigator;
