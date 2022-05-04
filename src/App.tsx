import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import Navigator from './screen/Navigator';
import {RecoilRoot} from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <SafeAreaProvider>
        <StatusBar />
        <Navigator />
      </SafeAreaProvider>
    </RecoilRoot>
  );
};

export default App;
