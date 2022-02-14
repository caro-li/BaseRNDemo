import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Flex } from '@ant-design/react-native'
import { apx, statusBarHeight } from '../utils/device'
import * as Navigation from '../utils/Navigation'
import { styles } from '../theme'
// import {useNavigation} from "@react-navigation/native";
import SvgIcon from "./SvgIcon";

// import { createNavigationContainerRef } from '@react-navigation/native';
//
// export const navigationRef = createNavigationContainerRef()

class TitleBar extends React.PureComponent {
  static propTypes = {
    renderLeft: PropTypes.func,
    renderRight: PropTypes.func,
    title: PropTypes.string.isRequired,
    hideBottomBorder: PropTypes.bool,
    theme: PropTypes.string,
    backgroundColor: PropTypes.string,
  }

  static defaultProps = {
    theme: 'default',
    renderLeft: theme => (
      <TouchableOpacity
        style={{
          height: apx(88),
          paddingHorizontal: apx(30),
          ...styles.center,
        }}
        onPress={() => {
          // Navigation.navigate('MainHomeDetail3', { names: ['Brent', 'Satya', 'Michaś'] })
          Navigation.goBack()
        }}
      >
        <SvgIcon
          icon={{ default: 'back', blue: 'back_blue' }[theme]}
          size={apx(36)}
        />
      </TouchableOpacity>
    ),
    renderRight: () => null,
    hideBottomBorder: false,
    backgroundColor: '#fff',
  }

  render() {

    return (
      <View
        style={{
          width: apx(750),
          backgroundColor: this.props.backgroundColor,
          paddingTop: statusBarHeight,
          borderBottomWidth: this.props.hideBottomBorder
            ? 0
            : StyleSheet.hairlineWidth,
          borderColor: '#d8d8d8',
        }}
      >
        <Flex style={{ height: apx(88) }} justify="center">
          <View
            style={{
              position: 'absolute',
              left: 0,
            }}
          >
            {this.props.renderLeft(this.props.theme)}
          </View>

          <Text
            style={{
              width: apx(450),
              fontSize: apx(36),
              fontWeight: 'bold',
              color: '#333',
              textAlign: 'center',
            }}
            numberOfLines={1}
          >
            {this.props.title}
          </Text>

          <View
            style={{
              position: 'absolute',
              right: 0,
            }}
          >
            {this.props.renderRight()}
          </View>
        </Flex>
      </View>
    )
  }
}

export default TitleBar
