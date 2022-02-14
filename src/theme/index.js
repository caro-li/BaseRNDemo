import {StyleSheet, Platform} from 'react-native';
import {apx, deviceWidth} from '../utils/device';

export const COLORS = {
  white: '#FFFFFF',
  blue: '#3C83FA',
  red: '#F8656D',
  yellow: '#FFC719',
  orangeRed: '#FF6C00',
  lightPurple: '#B819FF',

  themeColors: '#FE9339',

  textBlack: '#101010',
  textSub: '#919191',
  line: '#E0E0E0',

  backColor: '#F7F8F9',

  transparentText: 'rgba(255, 255, 255, 0.5)',

  textGray: '#030303',

  textPrimary: '#333333',
  textSecondary: '#999999',
  textWarn: '#f8BA12',
  textDanger: '#FF364F',
  textSegment: '#e4e4e4',
  textBg: '#f5f5f5',

  text999999: '#999999',

  text333333: '#333333',

  text384953: '#384953',
  text9b9b9b: '#9B9B9B',
  text979797: '#979797',

  placeholderColor: '#888888',

  backgroundColor: '#FFFFFF',

  textBG: '#F5F5F5',

  meMessages: '#0E90FD',
  meDraft: '#7098DA',
  meSetting: '#6FB6FF',
  meHelp: '#49DEC9',
  meAboutUs: '#87E8DE',
};

export const FONTSIZE = {
  // default fontsize

  tabIcon: 22,
  textFont: apx(28),

  headerText: apx(38),

  placeholderFont: apx(26),

  // prodcut

  // portforlio

  titleText: 20,

  // me screen

  formInput: 25,
};

export const PUB_STYLE = {
  headerLeftStyle: {marginLeft: 15, height: 21, width: 12},
  headerStyle: {
    borderBottomWidth: 2,
    borderBottomColor: '#CBCBCB',
    marginLeft: 10,
    marginRight: 10,
  },
  titleStyle: {
    color: '#333333',
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Helvetica',
  },
  boxShadowSetting: {
    color: '#000',
    border: 10,
    radius: 20,
    opacity: 0.05,
    x: 1,
    y: 1,
    width: deviceWidth * 0.92,
    height: 112,
    style: {marginVertical: 0, marginTop: 20},
  },
  focusText: {
    color: '#919191',
    fontSize: apx(26),
    fontWeight: '400',
  },
  focusTextBg: {
    color: '#919191',
    fontSize: apx(26),
    fontWeight: '400',
  },
  mt8: {
    marginTop: apx(16),
  },
  mt10: {
    marginTop: apx(20),
  },
  topLine: {
    borderTopWidth: apx(1),
    borderTopColor: 'rgba(217,217,217,0.5)',
  },
  titleBarText: {
    color: '#333333',
    fontSize: apx(26),
    fontWeight: '400',
    marginRight: apx(40),
  },
};

export const FONT = {
  Family: 'Helvetica',
};

export const STYLES = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupWindow: {
    zIndex: 999,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  inputContainer: {
    borderRadius: apx(6),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(0,0,0,0.15)',
    paddingHorizontal: apx(20),
    justifyContent: 'center',
    height: apx(70),
  },
});

export const colors = {
  placeholderTextColor: '#919191',
};

export const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    flex: 1,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  border: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#e4e4e4',
  },
  btnPrimary: {
    width: apx(658),
    height: apx(88),
    backgroundColor: '#4b65aa',
    borderRadius: apx(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnPrimaryText: {
    fontSize: apx(30),
    fontWeight: '500',
    color: '#735F3A',
  },
  btnSecondary: {
    width: apx(658),
    height: apx(88),
    backgroundColor: '#fff',
    borderRadius: apx(10),
    borderWidth: apx(1),
    borderColor: '#007CFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSecondaryText: {
    fontSize: apx(30),
    fontWeight: '500',
    color: '#E6D3B6',
  },
  subviewBackground: {
    color: '#F1F8FF',
  },
  assetMainText: {
    fontSize: apx(54),
    fontWeight: '500',
    color: '#CBC29C',
  },
  assetSubText: {
    fontSize: apx(26),
    fontWeight: '400',
    color: '#787C88',
  },
  assetBtn: {
    width: apx(180),
    height: apx(80),
    backgroundColor: '#4b65aa',
    borderRadius: apx(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  assetBtnText: {
    fontSize: apx(30),
    fontWeight: '500',
    color: '#FFF',
  },
  managementTitle: {
    fontSize: apx(36),
    fontWeight: '500',
    color: '#4A4A4A',
    textAlign: 'center',
    marginTop: apx(18),
    marginLeft: apx(46),
    marginBottom: apx(13),
  },
  settingCell: {
    width: apx(658),
    height: apx(134),
    marginHorizontal: apx(20),
    marginTop: apx(20),
    justifyContent: 'space-between',
    backgroundColor: '#535561',
    alignItems: 'center',
    borderRadius: apx(10),
  },
  settingCellText: {
    fontSize: apx(30),
    color: '#fff',
    marginLeft: apx(20),
  },
  subTitle: {
    fontSize: apx(26),
    fontWeight: '400',
    color: '#E6D3B6',
  },
  smallTitle: {
    fontSize: apx(26),
    fontWeight: '500',
    color: '#BFBFBF',
  },
  textContent: {
    fontSize: apx(36),
    fontWeight: '500',
    color: '#4A4A4A',
  },

  shadow: {
    shadowOffset: {width: apx(5), height: apx(21)},
    shadowColor: 'rgb(194, 193, 199)',
    shadowOpacity: 0.2,
    shadowRadius: apx(10),
    elevation: apx(5),
  },
  shadowBlue:
    Platform.OS === 'ios'
      ? {
          shadowOffset: {width: apx(5), height: apx(21)},
          shadowColor: '#FE9339',
          shadowOpacity: 0.2,
          shadowRadius: apx(10),
          elevation: apx(10),
        }
      : null,
});
