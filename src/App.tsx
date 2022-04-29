import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import Navigator from './screen/Navigator';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <Navigator />
    </SafeAreaProvider>
  );
};

export default App;
