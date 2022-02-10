import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {apx} from '../utils/device';
import {styles} from '../theme';

export default class ButtonGradient extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          width: this.props.width,
          height: this.props.height,
          // ...styles.shadowBlue,
          //
          // shadowColor: {
          //   light: '#FE9339',
          //   dark: '#FE9339',
          //   blue: '#0966C3',
          //   black: '#272C31',
          // }[this.props.theme],
          ...this.props.containerStyle,
        }}
        onPress={this.props.onPress}>
        <LinearGradient
          colors={
            {
              light: ['#fff', '#fff'],
              dark: ['#FF6132', '#FE9339'],
              blue: ['#0966C3', '#0966C3'],
              black: ['#272C31', '#272C31'],
            }[this.props.theme]
          }
          useAngle
          angle={169.83}
          angleCenter={{x: 1, y: 0}}
          style={{
            position: 'absolute',
            width: this.props.width,
            height: this.props.height,
            borderRadius: apx(10),
            borderColor: '#FE9339',
            borderWidth: {
              light: apx(1),
              dark: 0,
              blue: 0,
              black: 0,
            }[this.props.theme],
            ...styles.center,
            ...this.props.style,
          }}>
          <Text
            style={{
              ...styles.btnPrimaryText,
              color: {
                light: '#FE9339',
                dark: '#fff',
                blue: '#fff',
                black: '#fff',
              }[this.props.theme],
              ...this.props.textStyle,
            }}>
            {this.props.text}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

ButtonGradient.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark', 'blue', 'black']),
  width: PropTypes.any,
  height: PropTypes.any,
  containerStyle: PropTypes.any,
  style: PropTypes.any,
  textStyle: PropTypes.any,
  text: PropTypes.string,
  onPress: PropTypes.func,
};

ButtonGradient.defaultProps = {
  theme: 'dark',
  width: apx(560),
  height: apx(88),
  containerStyle: {},
  style: {},
  textStyle: {},
  text: 'Empty',
  onPress: () => {},
};
