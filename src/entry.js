import 'react-native-gesture-handler';
import React, {Component} from 'react';
// import {Provider} from '@ant-design/react-native';
import {Alert, AppState, StatusBar, View} from 'react-native';
import Toast from 'react-native-root-toast';
import moment from 'moment';
import LoadingIndicator from './components/LoadingIndicator';
import ModalCheckUpdate from './components/ModalCheckUpdate';
import {deviceHeight} from './utils/device';
// import TestEnv from './components/TestEnv';
import RouterContainer from "./router";

window.Alert = msg => {
  Alert.alert(
    'Note',
    msg,
    [
      {
        text: 'Comfirm',
        onPress: () => console.log('OK Pressed'),
      },
    ],
    {cancelable: false},
  );
};

export default class Entry extends Component {
  timer = null;

  lastShow = moment();

  appState = AppState.currentState;

  state = {
    modalSplash: false,
  };

  async componentDidMount() {
    window.$toast = {
      show: msg => {
        Toast.show(msg, {
          duration: Toast.durations.LONG,
          position: deviceHeight * 0.75,
          shadow: false,
          animation: true,
          hideOnPress: false,
          delay: 0,
        });
      },
    };

    AppState.addEventListener('change', this._handleAppStateChange);
  }

  async componentWillUnmount() {
    clearInterval(this.timer);
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = async nextAppState => {
    if (this.appState.match(/background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!');
      // GlobalNavigation.reset('Splash')

      // const isConnected = await checkConnected()
      // if (!isConnected) {
      //   // this.setState({ modalSplash: true })
      //   return
      // }
      const now = moment();
      if (now.diff(this.lastShow, 'second') > 60 * 3) {
        this.setState({modalSplash: true});
      }
    }
    if (this.appState.match(/active/) && nextAppState === 'background') {
      console.log('App has come to the background!');
      this.lastShow = moment();
      // await this.props.store.assets.unsubscribe()
    }
    this.appState = nextAppState;
  };

  getCurrentRouteName = navigationState => {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    if (route.routes) {
      return this.getCurrentRouteName(route);
    }
    return route.routeName;
  };

  onNavigationStateChange = (prevState, currentState) => {
    const currentScene = this.getCurrentRouteName(currentState);
    const previousScene = this.getCurrentRouteName(prevState);

    if (previousScene !== currentScene) {
      window.$loading.hide();
    }
  };

  render() {
    return (
      <>
        <StatusBar
          animated
          translucent
          barStyle="dark-content"
          backgroundColor="rgba(0,0,0,0)"
        />
        <RouterContainer></RouterContainer>
        <LoadingIndicator
          ref={ref => {
            window.window.$loading = ref;
          }}
        />

        <ModalCheckUpdate
          ref={ref => {
            window.$update = ref;
          }}
        />
      </>
    );
  }
}
