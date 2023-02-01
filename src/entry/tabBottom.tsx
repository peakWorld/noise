import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TabRoutes} from './router';

const Tab = createBottomTabNavigator();

const TabHome = () => (
  <Tab.Navigator
    initialRouteName={TabRoutes[0].path}
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName = '';
        const {name} = route;
        const selectedTab = TabRoutes.find(it => it.path === name);
        iconName = `${selectedTab?.tabIcon}${focused ? '-outline' : ''}`;
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
    {TabRoutes.map(route => (
      <Tab.Screen
        key={route.path}
        name={route.path}
        component={route.component}
        options={route.options}
      />
    ))}
  </Tab.Navigator>
);

export default TabHome;
