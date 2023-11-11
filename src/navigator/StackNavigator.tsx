import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from '../containers/Screen1';
import Screen2 from '../containers/Screen2';

const Stack = createNativeStackNavigator();

const StackNavigatorHome = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="screen1"
        component={Screen1}
        options={{title: 'Screen 1'}}
      />
      <Stack.Screen
        name="screen2"
        component={Screen2}
        options={{title: 'Screen 2'}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigatorHome;
