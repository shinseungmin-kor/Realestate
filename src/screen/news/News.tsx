import React from 'react';
import {Text, View} from 'react-native';
import { SafeContainer } from '../../components/container/SafeContainer';

const News = () => {
  return (
    <SafeContainer style={{ backgroundColor: 'white' }}>
      <Text>뉴스</Text>
    </SafeContainer>
  );
};

export default News;
