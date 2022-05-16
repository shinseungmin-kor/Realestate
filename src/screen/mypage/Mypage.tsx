import React, { useState } from 'react';
import {Text, TouchableOpacity, View, Linking, Platform, StyleSheet, Button} from 'react-native';
import {useSetRecoilState} from 'recoil';
import { SafeContainer } from '../../components/container/SafeContainer';
import {userState} from '../Navigator';

const Mypage = (props: {navigation: any}) => {
  const {navigation} = props;
  const setIsUser = useSetRecoilState(userState);

  const makeCall = () => {

    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${1234567890}';
    } else {
      phoneNumber = 'telprompt:${1234567890}';
    }

    Linking.openURL(phoneNumber);
  };

  return (
    <SafeContainer style={{ backgroundColor: 'white' }}>
      <Text
        onPress={() => {
          setIsUser(false);
          // navigation.push('Gateway');
        }}>
        Mypage
      </Text>
      <TouchableOpacity onPress={makeCall} activeOpacity={0.7} style={styles.touchableButton} >
          <Text style={styles.TextStyle}> Click Here To Dial In Dial Screen</Text>
        </TouchableOpacity>
        <Text onPress={() => {Linking.openURL(`sms:01012341234`)}}>ㄹㄴㅇㄹㄴ</Text>
        <Text onPress={() => {Linking.openURL(`mailto:test@mail.com`)}}>asdaasd</Text>
      </SafeContainer>
  );
};

export default Mypage;

const styles = StyleSheet.create(
    {
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
      },
      touchableButton: {
        width: '80%',
        padding: 10,
        backgroundColor: '#9c27b0',
      },
      TextStyle: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
      }
  
    });