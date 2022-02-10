/**
 * Date: 2022/2/10 下午2:51
 * Author: caro
 * Description:
 * */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import MainHome from "../pages/mainTabs/MainHome";
import MainHomeDetail from "../pages/mainHome/Detail";
import React from "react";
import {Text, View} from "react-native"
import Profile from "../pages/mainTabs/Profile";
import ProfileDetail from "../pages/profile/detail";
import FastImage from "react-native-fast-image";
import {apx} from "../utils/device";


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
          tabBarIcon: ({ focused }) => {
            const tabLabels = {
              MainHome: '首页',
              DApp: '应用',
              Social: '社交',
              MainMe: '我的',
            }
            const images = {
              MainHome: {
                selected: require('./images/Tab/main_tab_home_selected.png'),
                normal: require('./images/Tab/main_tab_home_normal.png'),
              },
              DApp: {
                selected: require('./images/Tab/main_tab_dapp_selected.png'),
                normal: require('./images/Tab/main_tab_dapp_normal.png'),
              },
              Social: {
                selected: require('./images/Tab/main_tab_social_selected.png'),
                normal: require('./images/Tab/main_tab_social_normal.png'),
              },
              MainMe: {
                selected: require('./images/Tab/main_tab_me_selected.png'),
                normal: require('./images/Tab/main_tab_me_normal.png'),
              },
            }

            const { routeName } = navigation.state

            // You can return any component that you like here!
            const textColor = focused ? '#0966C3' : '#919191'
            const icon = images[routeName][focused ? 'selected' : 'normal']
            return (
              <View
                style={{
                  width: apx(750 / 3),
                  height: apx(98),
                  borderTopWidth: apx(1),
                  borderColor: '#D9D9D9',
                  backgroundColor: '#fff',
                  ...styles.center,
                }}
              >
                <FastImage
                  source={icon}
                  // resizeMode="contain"
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
      <Tab.Screen name="MainHome" component={MainHomeStackScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


