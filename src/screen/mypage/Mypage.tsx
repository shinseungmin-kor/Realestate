import React from 'react';
import {Text, View} from 'react-native';
import {useSetRecoilState} from 'recoil';
import { SafeContainer } from '../../components/container/SafeContainer';
import {userState} from '../Navigator';

const Mypage = (props: {navigation: any}) => {
  const {navigation} = props;
  const setIsUser = useSetRecoilState(userState);
  return (
    <SafeContainer style={{ backgroundColor: 'white' }}>
      <Text
        onPress={() => {
          setIsUser(false);
          // navigation.push('Gateway');
        }}>
        Mypage
      </Text>
      </SafeContainer>
  );
};

export default Mypage;
