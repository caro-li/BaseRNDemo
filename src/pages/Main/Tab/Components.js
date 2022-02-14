/**
 * Date: 2022/2/14 下午2:46
 * Author: caro
 * Description: 功能
 * */
import React from "react";
import {View, Text} from 'react-native';
import Container from "../../../components/Container";
import TitleBar from "../../../components/TitleBar";

export default function Components() {
  return (
    <Container>
      <TitleBar renderLeft={()=>{}} title={'Components'} />
      <Text>Components Screen</Text>
    </Container>
  );
}
