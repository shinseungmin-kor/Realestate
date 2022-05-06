import React from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import {SafeContainer} from '../../components/container/SafeContainer';

export enum NavigationHeaderPosition {
  Center,
  Left,
}
interface IProps {
  title?: string;
  position?: NavigationHeaderPosition;
  hasBackButton?: boolean;
  onPressBackButton?: () => void;
  headerLeft?: () => React.ReactNode;
  headerRight?: () => React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Home = () => {
  return (
    <SafeContainer style={{backgroundColor: 'white'}}>
      <View />
    </SafeContainer>
  );
};

export default Home;
