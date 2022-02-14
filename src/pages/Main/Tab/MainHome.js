/**
 * Date: 2022/2/10 下午2:45
 * Author: caro
 * Description:
 * */
import React from "react";
import {View, Text} from 'react-native';
import Button from "@ant-design/react-native/es/button";
import {useNavigation} from "@react-navigation/native";
import Container from "../../../components/Container";
import TitleBar from "../../../components/TitleBar";

export default function MainHome() {
  const navigation = useNavigation();
  return (
    <Container>
      <Text>Home Screen</Text>
      <Button
        onPress={() =>
          navigation.navigate('MainHomeDetail', { names: ['Brent', 'Satya', 'Michaś'] })
        }
        title="Go to Brent's profile"
      >gotoDetail</Button>
      <Button
        onPress={() => {
          console.log(navigation)
          navigation.navigate('MainHomeDetail2', { names: ['Brent', 'Satya', 'Michaś'] })

        }}
        title="Go to Brent's profile"
      >gotoDetail2</Button>

      <Button
        onPress={() => {
          console.log(navigation)
          navigation.navigate('Meeting', { screen: 'MeetingDash', names: ['Brent', 'Satya', 'Michaś'] })
        }}
        title="Go to Brent's profile"
      >Meeting</Button>
    </Container>
  );
}
