import React from 'react'
import { View } from 'react-native'
import { apx, isIPhoneX } from '../utils/device'

function Container(props) {
  return (
    <View
      style={{
        width: apx(750),
        flex: 1,
        paddingBottom: isIPhoneX() ? apx(60) : 0,
        backgroundColor: '#F7F8F9',
        alignItems: 'center',
        ...props.style,
      }}
    >
      {props.children}
    </View>
  )
}

export default Container
