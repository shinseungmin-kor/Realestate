import React from 'react';
import {Text, View} from 'react-native';
import {FullfilButton} from '../../components/button/BasicButton';

const Login = (props: {navigation: any}) => {
  const {navigation} = props;
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
          navigation.push('Home');
        }}
      />
    </View>
  );
};

export default Login;
