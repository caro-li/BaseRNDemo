/**
 * Date: 2022/2/10 下午2:49
 * Author: caro
 * Description:
 * */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Main from "./main";
import Meeting from "./Meeting";
import {navigationRef} from "../utils/Navigation";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Meeting" component={Meeting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


