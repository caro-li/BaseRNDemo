/**
 * Date: 2022/2/10 下午2:51
 * Author: caro
 * Description:
 * */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import React from "react";
import {Text, View, Image, StyleSheet} from "react-native"
import FastImage from "react-native-fast-image";
import {apx} from "../utils/device";
import Button from "@ant-design/react-native/es/button";
import MainHome from "../pages/Main/Tab/MainHome";
import MainHomeDetail from "../pages/Main/InnerPages/Detail";
import Profile from "../pages/Main/Tab/Profile";
import ProfileDetail from "../pages/Main/InnerPages/ProfileDetail";
import MainHomeDetail2 from "../pages/Main/InnerPages/Detail2";
import MainHomeDetail3 from "../pages/Main/InnerPages/Detail3";
import Feature from "../pages/Main/Tab/Feature";
import Components from "../pages/Main/Tab/Components";

const header = {
  defaultOptions: {

  },
  HiddenOptions: {
    headerShown: false
  },
  groupOptions: ({ navigation }) => ({
    headerStyle: { backgroundColor: 'papayawhip' },
    headerLeft: () => <Button onPress={navigation.goBack}>back</Button>,
  }),
}


const MainHomeStack = createNativeStackNavigator();

function MainHomeStackScreen() {
  return (
    <MainHomeStack.Navigator screenOptions={header.HiddenOptions}>
      <MainHomeStack.Screen name="Home" component={MainHome} />
      <MainHomeStack.Group screenOptions={header.groupOptions}>
        <MainHomeStack.Screen name="MainHomeDetail" component={MainHomeDetail} />
      </MainHomeStack.Group>
    </MainHomeStack.Navigator>
  );
}

const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={header.HiddenOptions}>
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="ProfileDetail" component={ProfileDetail} />
    </ProfileStack.Navigator>
  );
}

const MainTab = createBottomTabNavigator();
function MainTabScreen() {
  return (
    <MainTab.Navigator
      screenOptions={({ route }) => ({
        ...header.HiddenOptions,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          const tabLabels = {
            Main: '首页',
            Feature: '功能',
            Components: '组件',
            Profiles: '我的',
          }
          const images = {
            Main: {
              selected: require('../images/Tab/main_tab_home_selected.png'),
              normal: require('../images/Tab/main_tab_home_normal.png'),
            },
            Feature: {
              selected: require('../images/Tab/main_tab_dapp_selected.png'),
              normal: require('../images/Tab/main_tab_dapp_normal.png'),
            },
            Components: {
              selected: require('../images/Tab/main_tab_social_selected.png'),
              normal: require('../images/Tab/main_tab_social_normal.png'),
            },
            Profiles: {
              selected: require('../images/Tab/main_tab_me_selected.png'),
              normal: require('../images/Tab/main_tab_me_normal.png'),
            },
          }

          const routeName = route.name
          // You can return any component that you like here!
          const textColor = focused ? '#0966C3' : '#919191'
          const icon = images[routeName][focused ? 'selected' : 'normal']
          return (
            <View
              style={{
                width: apx(750 / 4),
                height: apx(98),
                // borderTopWidth: apx(1),
                // borderColor: '#D9D9D9',
                backgroundColor: '#fff',
                ...styles.center,
              }}
            >
              <Image
                source={icon}
                style={{ width: apx(40), height: apx(40), marginBottom: apx(6) }}
              />
              <Text
                style={{
                  color: textColor,
                  fontSize: apx(22),
                  fontWeight: '400',
                }}
              >
                {tabLabels[routeName]}
              </Text>
            </View>
          )
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <MainTab.Screen name="Main" component={MainHomeStackScreen} />
      <MainTab.Screen name="Feature" component={Feature} />
      <MainTab.Screen name="Components" component={Components} />
      <MainTab.Screen name="Profiles" component={ProfileStackScreen} />
    </MainTab.Navigator>
  )
}


const MainStack = createNativeStackNavigator()

export default function Main() {
  return (
      <MainStack.Navigator initialRouteName="MainTab" screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="MainTab" component={MainTabScreen} />
        <MainStack.Screen name="MainHomeDetail2" component={MainHomeDetail2} />
        <MainStack.Screen name="MainHomeDetail3" component={MainHomeDetail3} />
      </MainStack.Navigator>
  );
}

export const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})


