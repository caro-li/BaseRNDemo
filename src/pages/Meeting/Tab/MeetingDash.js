/**
 * Date: 2022/2/11 下午1:44
 * Author: caro
 * Description:
 * */

import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import Button from "@ant-design/react-native/es/button";
import {useNavigation} from "@react-navigation/native";
import Container from "../../../components/Container";
import TitleBar from "../../../components/TitleBar";
import {apx} from "../../../utils/device";
import {styles} from "../../../theme";
import * as Navigation from "../../../utils/Navigation";
import SvgIcon from "../../../components/SvgIcon";

export default function MeetingDash() {
  const navigation = useNavigation();
  const renderLeft = () => (
    <TouchableOpacity
      style={{
        height: apx(88),
        paddingHorizontal: apx(30),
        ...styles.center,
      }}
      onPress={() => {
        navigation.navigate('Main', {})
      }}
    >
      <SvgIcon
        icon={'main'}
        size={apx(36)}
      />
    </TouchableOpacity>)
  return (
    <Container>
      <TitleBar renderLeft={renderLeft}
        title="Meeting Dash" />

      <Text>Meeting Screen</Text>

      <Button
        onPress={() => {
          console.log(navigation)
          navigation.navigate('MeetingDetail', { names: ['Brent', 'Satya', 'Michaś'] })
        }}
        title="Go to Brent's profile"
      >Goto Meeting Detail</Button>
    </Container>
  );
}
