import React from 'react';
import {Text, View} from 'react-native';
import {useResetRecoilState, useSetRecoilState} from 'recoil';
import {FullfilButton} from '../../components/button/BasicButton';
import {userState} from '../Navigator';

const Login = (props: {navigation: any}) => {
  const {navigation} = props;
  const setIsUser = useSetRecoilState(userState);
  return (
    <View
      style={{
        position: 'absolute',
        flexDirection: 'row',
        marginBottom: 10,
      }}>
      <FullfilButton
        text="로그인"
        style={{bottom: 10}}
        onPress={() => {
          setIsUser(true);
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default Login;
