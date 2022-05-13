/**
 * Date: 2022/2/11 下午1:39
 * Author: caro
 * Description:
 * */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";
import {Text, View, Image, StyleSheet} from "react-native"
import FastImage from "react-native-fast-image";
import {apx} from "../utils/device";
import Button from "@ant-design/react-native/es/button";
import MeetingDash from "../pages/Meeting/Tab/MeetingDash";
import Social from "../pages/Meeting/Tab/Social";
import MeetingDetail from "../pages/Meeting/InnerPages/MeetingDetail";

const ScreenOptions = {
  'default': {
    gestureEnabled: false,
  },
  'hidden': {
    headerShown: false
  },
  'group': ({ navigation }) => ({
    headerStyle: { backgroundColor: 'papayawhip' },
    headerLeft: () => <Button onPress={navigation.goBack}>back</Button>,
  }),
}

const MainTab = createBottomTabNavigator();
function MainTabScreen() {
  return (
    <MainTab.Navigator
      screenOptions={({ route }) => ({
        ...ScreenOptions.hidden,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          const tabLabels = {
            Home: '会议',
            Social: '社交',
          }
          const images = {
            Home: {
              selected: require('../images/Tab/main_tab_dapp_selected.png'),
              normal: require('../images/Tab/main_tab_dapp_normal.png'),
            },
            Social: {
              selected: require('../images/Tab/main_tab_social_selected.png'),
              normal: require('../images/Tab/main_tab_social_normal.png'),
            },
          }

          const routeName = route.name
          // You can return any component that you like here!
          const textColor = focused ? '#0966C3' : '#919191'
          const icon = images[routeName][focused ? 'selected' : 'normal']
          return (
            <View
              style={{
                width: apx(750 / 2),
                height: apx(98),
                backgroundColor: '#fff',
                ...styles.center,
              }}
            >
              <FastImage
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
      <MainTab.Screen name="Home" component={MeetingDash} />
      <MainTab.Screen name="Social" component={Social} />
    </MainTab.Navigator>
  )
}

const MainStack = createNativeStackNavigator()

export default function Meeting() {
  return (
    <MainStack.Navigator initialRouteName="MeetingDash" screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="MeetingDash" component={MainTabScreen} />
      <MainStack.Screen name="MeetingDetail" component={MeetingDetail} />
    </MainStack.Navigator>
  );
}

export const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})



