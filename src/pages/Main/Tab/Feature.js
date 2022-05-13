/**
 * Date: 2022/2/14 下午2:46
 * Author: caro
 * Description: 功能
 * */
import React from "react";
import {View, Text} from 'react-native';
import Container from "../../../components/Container";
import TitleBar from "../../../components/TitleBar";
import {apx} from "../../../utils/device";
import {FlatList} from "react-native-gesture-handler";
import {ListItem, Avatar, Icon} from 'react-native-elements'

export default function Feature() {

  const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },
  ]

  keyExtractor = (item, index) => index.toString()

  const renderItem = ({ item }) => (
    <ListItem bottomDivider onPress={() => {
      console.log(item)
    }}>
      {/*<Avatar source={{uri: item.avatar_url}} />*/}
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
      </ListItem.Content>
      {/*<ListItem.Chevron />*/}
    </ListItem>
  )

  return (
    <Container>
      <TitleBar renderLeft={()=>{}} title={'Feature'} />
      <View style={{width: apx(750)}}>
        <FlatList
          keyExtractor={keyExtractor}
          data={list}
          renderItem={renderItem}
        />
      </View>
    </Container>
  );
}
