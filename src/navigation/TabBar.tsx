import React from 'react';
import {Image, Text, View} from 'react-native';
import ImageSet from '../images';

const TabBar = (props: any) => {
  const {state, descriptors, navigation} = props;

  const {
    home,
    homeActive,
    lounge,
    loungeActive,
    myPage,
    myPageActive,
    party,
    partyActive,
    judge,
    judgeActive,
    affinity,
    affinityActive,
  } = ImageSet.BottomTab;

  const getIcon = (name: string, focused: boolean) => {
    if (name === 'Daily') {
      if (!focused) {
        return home;
      }
      return homeActive;
    } else if (name === 'Affinity') {
      if (!focused) {
        return affinity;
      }
      return affinityActive;
    } else if (name === 'Party') {
      if (!focused) {
        return party;
      }
      return partyActive;
    } else if (name === 'Lounge') {
      if (!focused) {
        return lounge;
      }
      return loungeActive;
    } else if (name === 'HiPick') {
      if (!focused) {
        return judge;
      }
      return judgeActive;
    } else if (name === 'MyPage') {
      if (!focused) {
        return myPage;
      }
      return myPageActive;
    }
  };

  return (
    <View>
      <Text>hello</Text>
    </View>
  );
};

export default TabBar;
