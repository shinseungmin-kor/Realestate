import React from 'react';
import {Text, View} from 'react-native';
import {useSetRecoilState} from 'recoil';
import {userState} from '../Navigator';

const Mypage = (props: {navigation: any}) => {
  const {navigation} = props;
  const setIsUser = useSetRecoilState(userState);
  return (
    <View>
      <Text
        onPress={() => {
          setIsUser(false);
          // navigation.push('Gateway');
        }}>
        Mypage
      </Text>
    </View>
  );
};

export default Mypage;
