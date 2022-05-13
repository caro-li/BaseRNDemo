/**
 * Date: 2022/2/11 下午1:45
 * Author: caro
 * Description:
 * */

import React from "react";
import {View, Text} from 'react-native';
import Button from "@ant-design/react-native/es/button";
import {useNavigation} from "@react-navigation/native";

export default function Social() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Social Screen</Text>
      <Button
        onPress={() =>
          navigation.navigate('MainHomeDetail', { names: ['Brent', 'Satya', 'Michaś'] })
        }
        title="Go to Brent's profile"
      >gotoDetail</Button>
      <Button
        onPress={() => {
          console.log(navigation)
          navigation.navigate('Stack', { screen: 'MainHomeDetail2', names: ['Brent', 'Satya', 'Michaś'] })

        }}
        title="Go to Brent's profile"
      >gotoDetail2</Button>
    </View>
  );
}
