import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const FullfilButton = (props: {text: string}) => {
  const {text, onPress} = props;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{
        height: 50,
        backgroundColor: 'white',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
      }}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

const UnFullfilButton = (props: {text: string}) => {
  const {text, onPress} = props;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{
        height: 50,
        backgroundColor: 'white',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
      }}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export {FullfilButton, UnFullfilButton};
