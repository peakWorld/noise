import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  useFlipper,
  useReduxDevToolsExtension,
} from '@react-navigation/devtools';
import PageBackground from '@/components/base/pageBackground';
import {routes, ModalRoutes} from './router';

const Stack = createNativeStackNavigator();

const Pages = () => {
  const navigationRef = useNavigationContainerRef();

  // 结合flipper审阅router
  useFlipper(navigationRef);
  useReduxDevToolsExtension(navigationRef);

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <PageBackground />
        <Stack.Navigator initialRouteName={routes[0].path}>
          <Stack.Group>
            {routes.map(route => (
              <Stack.Screen
                key={route.path}
                name={route.path}
                component={route.component}
                options={route.options}
              />
            ))}
          </Stack.Group>
          <Stack.Group screenOptions={{presentation: 'modal'}}>
            {ModalRoutes.map(route => (
              <Stack.Screen
                key={route.path}
                name={route.path}
                component={route.component}
                options={route.options}
              />
            ))}
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Pages;
