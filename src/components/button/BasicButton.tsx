import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const FullfilButton = (props: {text: string}) => {
  const {text, onPress, isFullfil = true, style} = props;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        {
          height: 50,
          backgroundColor: isFullfil ? '#256AFF' : '#FDFEFF',
          borderRadius: 4,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 10,
        },
        style,
      ]}>
      <Text
        style={{
          textAlign: 'center',
          color: isFullfil ? '#FDFEFF' : '#256AFF',
          fontWeight: 'bold',
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const UnFullfilButton = (props: {text: string}) => {
  const {text, onPress, isFullfil = true, style} = props;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        {
          height: 50,
          backgroundColor: isFullfil ? '#256AFF' : '#E6EEFF',
          borderRadius: 4,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 10,
        },
        style,
      ]}>
      <Text
        style={{
          textAlign: 'center',
          color: isFullfil ? '#FDFEFF' : '#256AFF',
          fontWeight: 'bold',
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export {FullfilButton, UnFullfilButton};
