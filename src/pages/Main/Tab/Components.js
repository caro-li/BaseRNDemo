/**
 * Date: 2022/2/14 δΈε2:46
 * Author: caro
 * Description: εθ½
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
