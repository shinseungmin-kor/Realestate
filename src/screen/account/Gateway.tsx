import React from 'react';
import {Dimensions, Image, View} from 'react-native';
import {
  FullfilButton,
  UnFullfilButton,
} from '../../components/button/BasicButton';
import styled from 'styled-components/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

const Gateway = (props: {navigation: any}) => {
  const {navigation} = props;
  const win = Dimensions.get('window');
  const insets = useSafeAreaInsets();

  return (
    <View>
      <Image
        source={require('../../images/1.png')}
        style={{width: win.width, height: 800}}
      />
      <ButtonContainer style={{paddingBottom: insets.bottom}}>
        <View
          style={{
            position: 'absolute',
            flexDirection: 'row',
            marginBottom: 10,
          }}>
          <FullfilButton
            text="회원가입"
            style={{bottom: 10}}
            onPress={() => navigation.navigate('Signup')}
          />
          <UnFullfilButton
            text="로그인"
            style={{flex: 1}}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </ButtonContainer>
    </View>
  );
};

export default Gateway;

const ButtonContainer = styled.View({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'gray',
});
