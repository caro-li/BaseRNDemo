/**
 * Date: 2022/2/10 下午2:51
 * Author: caro
 * Description:
 * */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";
import {Text} from "react-native"
import MainHome from "./src/pages/mainTabs/MainHome";
import MainHomeDetail from "./src/pages/mainHome/Detail";
import Profile from "./src/pages/mainTabs/Profile";
import ProfileDetail from "./src/pages/profile/detail";
// import Ionicons from 'react-native-vector-icons/Ionicons';


const MainHomeStack = createNativeStackNavigator();

function MainHomeStackScreen() {
  return (
    <MainHomeStack.Navigator>
      <MainHomeStack.Screen name="MainHome" component={MainHome} />
      <MainHomeStack.Screen name="MainHomeDetail" component={MainHomeDetail} />
    </MainHomeStack.Navigator>
  );
}

const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="ProfileDetail" component={ProfileDetail} />
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Text>{iconName}</Text>;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Main" component={MainHomeStackScreen} />
        <Tab.Screen name="Profiles" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


