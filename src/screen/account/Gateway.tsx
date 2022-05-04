import React, {useRef} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  FullfilButton,
  UnFullfilButton,
} from '../../components/button/BasicButton';
import styled from 'styled-components/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {userState} from '../Navigator';
import {useSetRecoilState} from 'recoil';
import ImageSet from '../../images';

const Gateway = (props: {navigation: any}) => {
  const {navigation} = props;
  const win = Dimensions.get('window');
  const insets = useSafeAreaInsets();
  const setIsUser = useSetRecoilState(userState);

  const scrollX = useRef(new Animated.Value(0)).current;

  const interpolate = {
    first: scrollX.interpolate({
      inputRange: [0, win.width, win.width * 2, win.width * 3],
      outputRange: ['#256AFF', '#E1E4E6', '#E1E4E6', '#E1E4E6'],
    }),
    second: scrollX.interpolate({
      inputRange: [0, win.width, win.width * 2, win.width * 3],
      outputRange: ['#E1E4E6', '#256AFF', '#E1E4E6', '#E1E4E6'],
    }),
    third: scrollX.interpolate({
      inputRange: [0, win.width, win.width * 2, win.width * 3],
      outputRange: ['#E1E4E6', '#E1E4E6', '#256AFF', '#E1E4E6'],
    }),
    fourth: scrollX.interpolate({
      inputRange: [0, win.width, win.width * 2, win.width * 3],
      outputRange: ['#E1E4E6', '#E1E4E6', '#E1E4E6', '#256AFF'],
    }),
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          {useNativeDriver: false},
        )}>
        <Image
          source={ImageSet.Gatway.one}
          style={{width: win.width, height: win.height}}
        />
        <Image
          source={ImageSet.Gatway.two}
          style={{width: win.width, height: win.height}}
        />
        <Image
          source={ImageSet.Gatway.three}
          style={{width: win.width, height: win.height}}
        />
        <Image
          source={ImageSet.Gatway.four}
          style={{width: win.width, height: win.height}}
        />
      </Animated.ScrollView>
      <ButtonContainer
        style={{paddingBottom: insets.bottom, paddingHorizontal: 16}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 15,
          }}>
          <Indicator style={{backgroundColor: interpolate.first}} />
          <Indicator style={{backgroundColor: interpolate.second}} />
          <Indicator style={{backgroundColor: interpolate.third}} />
          <Indicator style={{backgroundColor: interpolate.fourth}} />
        </View>
        <View style={{flexDirection: 'row', marginBottom: 12}}>
          <FullfilButton
            style={{marginRight: 10, flex: 1}}
            text="회원가입"
            onPress={() => {
              navigation.navigate('Signup');
            }}
          />
          <UnFullfilButton
            style={{flex: 1}}
            text="비회원으로 이용하기"
            onPress={() => {
              setIsUser(true);
            }}
            isFullfil={false}
          />
        </View>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            alignSelf: 'center',
            marginBottom: 16,
            borderBottomWidth: 1,
            borderBottomColor: '#878D91',
          }}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text
            style={{
              color: '#878D91',
            }}>
            이메일로 로그인하기
          </Text>
        </TouchableOpacity>
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
  backgroundColor: '#FDFEFF',
});

const Indicator = styled(Animated.View)({
  width: 7,
  height: 7,
  marginLeft: 3,
  marginRight: 3,
  borderRadius: 4,
});
