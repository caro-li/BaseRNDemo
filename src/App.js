import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
// import { Provider } from '@ant-design/react-native'
// import {Provider} from 'mobx-react';
// import faker from 'faker';
import DeviceInfo from 'react-native-device-info';
import * as Sentry from '@sentry/browser';
import {Platform} from 'react-native';
import Entry from './entry';
import {ENV} from './utils';

// faker.locale = 'zh_CN';

console.disableYellowBox = true;

if (!__DEV__) {
  global.console.log = () => {};
  Sentry.init({
    dsn: 'https://aea1cbd02e24486496c90dc0e8147da8@sentry.dev.unityapi.cn/4',
    environment: __DEV__ ? 'Development' : ENV,
    debug: __DEV__,
    beforeSend(event) {
      const error = event.originalException;
      if (error && error.message && error.message.indexOf('MobX') !== -1) {
        return null;
      }
      return event;
    },
  });

  Sentry.configureScope(scope => {
    // scope.setExtra('battery', 0.7);
    scope.setTags({
      environment: __DEV__ ? 'Development' : ENV,
      debug: __DEV__,
      platform: Platform.OS,
      version: DeviceInfo.getVersion(),
      buildNumber: DeviceInfo.getBuildNumber(),
      deviceId: DeviceInfo.getDeviceId(),
    });
    // scope.clear();
  });
}

const App = () => {
  useEffect(() => {
    // window.$store = rootStore;
    // checkForUpdateManual(false, true)
  });

  return (
    // <Provider>
    <Entry />
    // </Provider>
  );
};

export default App;
