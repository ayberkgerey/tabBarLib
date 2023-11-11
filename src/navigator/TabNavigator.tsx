import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CustomTabBar} from '../components/CustomTabBar';
import StackNavigator from './StackNavigator';
import Screen3 from '../containers/Screen3';

const Tab = createBottomTabNavigator();

const StackNavigatorHome = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={StackNavigator} />
      <Tab.Screen name="Settings" component={Screen3} />
    </Tab.Navigator>
  );
};

export default StackNavigatorHome;
