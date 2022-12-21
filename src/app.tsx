import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Router from './route';

const App = () => {
  return (
    <SafeAreaProvider>
      <Router />
    </SafeAreaProvider>
  );
};
export default App;
