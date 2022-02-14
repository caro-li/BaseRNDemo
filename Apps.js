/**
 * Date: 2022/2/10 下午2:51
 * Author: caro
 * Description:
 * */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";
import {Text, View, Image, StyleSheet} from "react-native"
import MainHome from "./src/pages/mainTabs/MainHome";
import MainHomeDetail from "./src/pages/mainHome/Detail";
import Profile from "./src/pages/mainTabs/Profile";
import ProfileDetail from "./src/pages/profile/detail";
import {apx} from "./src/utils/device";
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
            const tabLabels = {
              MainHome: '首页',
              DApp: '应用',
              Social: '社交',
              MainMe: '我的',
            }
            const images = {
              Main: {
                selected: require('./src/images/Tab/main_tab_home_selected.png'),
                normal: require('./src/images/Tab/main_tab_home_normal.png'),
              },
              DApp: {
                selected: require('./src/images/Tab/main_tab_dapp_selected.png'),
                normal: require('./src/images/Tab/main_tab_dapp_normal.png'),
              },
              Social: {
                selected: require('./src/images/Tab/main_tab_social_selected.png'),
                normal: require('./src/images/Tab/main_tab_social_normal.png'),
              },
              Profiles: {
                selected: require('./src/images/Tab/main_tab_me_selected.png'),
                normal: require('./src/images/Tab/main_tab_me_normal.png'),
              },
            }

            const routeName = route.name

            console.log(routeName)

            // You can return any component that you like here!
            const textColor = focused ? '#0966C3' : '#919191'
            const icon = images[routeName][focused ? 'selected' : 'normal']
            return (
              <View
                style={{
                  // width: apx(750 / 3),
                  // height: apx(98),
                  // borderTopWidth: apx(1),
                  borderColor: '#D9D9D9',
                  backgroundColor: '#fff',
                  ...styles.center,
                }}
              >
                <Image
                  source={icon}
                  style={{ width: apx(40), height: apx(40), marginBottom: apx(6) }}
                />
              </View>
            )
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

export const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})


