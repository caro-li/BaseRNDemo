import React from 'react';
import {View} from 'react-native';
import {apx} from '../utils/device';

export default class ProgressBar extends React.Component {
  render = () => (
    <View
      style={{
        height: apx(20),
        width: apx(452),
        borderRadius: apx(10),
        backgroundColor: '#00000000',
        position: 'relative',
      }}>
      <View
        style={{
          height: apx(20),
          borderRadius: apx(10),
          position: 'absolute',
          backgroundColor: '#0966C3',
          top: 0,
          left: 0,
          width: apx(452) * this.props.progress,
        }}
      />
    </View>
  );
}
