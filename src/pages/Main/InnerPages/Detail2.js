/**
 * Date: 2022/2/10 下午2:45
 * Author: caro
 * Description:
 * */
import React from "react";
import {View, Text} from 'react-native';
import Container from "../../../components/Container";
import TitleBar from "../../../components/TitleBar";
import Button from "@ant-design/react-native/es/button";

export default function MainHomeDetail2({navigation}) {
  return (
    <Container>
      <TitleBar title="Detail2"></TitleBar>
      <Text>Main Home Detail2 Screen</Text>
      <Button
        onPress={() => {
          navigation.navigate('MainHomeDetail3', { names: ['Brent', 'Satya', 'Michaś'] })
        }}
        title="Go to Brent's profile"
      >gotoDetail3</Button>
    </Container>
  );
}
