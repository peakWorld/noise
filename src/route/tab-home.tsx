import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HelloWorld from '../views/hello-world';
import Home from '../views/home';

const Tab = createBottomTabNavigator();

const TabHome = () => (
  <Tab.Navigator
    initialRouteName="HelloWorld"
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName = '';

        if (route.name === 'HelloWorld') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === 'Home') {
          iconName = focused ? 'ios-list' : 'ios-list-outline';
        }
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
    <Tab.Screen name="HelloWorld" component={HelloWorld} />
    <Tab.Screen name="Home" component={Home} options={{title: 'HomeTitle'}} />
  </Tab.Navigator>
);

export default TabHome;
