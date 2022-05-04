import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {atom, useRecoilState} from 'recoil';
import NotUserNavigator from '../navigation/NotUserNavigator';
import UserNavigator from '../navigation/UserNavigator';

export const userState = atom({
  key: 'user',
  default: false,
});

const Navigator = () => {
  const [isUser] = useRecoilState(userState);

  return (
    <>
      <NavigationContainer>
        {isUser ? <UserNavigator /> : <NotUserNavigator />}
      </NavigationContainer>
    </>
  );
};

export default Navigator;
