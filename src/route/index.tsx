import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  useFlipper,
  useReduxDevToolsExtension,
} from '@react-navigation/devtools';
import TabHome from './tab-home';

const Stack = createNativeStackNavigator();

const Router = () => {
  const navigationRef = useNavigationContainerRef();

  // 结合flipper审阅router
  useFlipper(navigationRef);
  useReduxDevToolsExtension(navigationRef);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="initTabHome">
        <Stack.Screen
          name="initTabHome"
          component={TabHome}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
