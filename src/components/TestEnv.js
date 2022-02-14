/**
 * Date: 2022/2/7 下午3:15
 * Author: caro
 * Description: ..
 * */

import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {ENV} from '../utils/index';
import envConfig from '../env/config';
import LoadingIndicator, {LoadingIndicatorControl} from './LoadingIndicator';

const TestEnv = () => {
  const host = envConfig[ENV].host;
  useEffect(() => {
    window.$loading.show();
    setTimeout(() => {
      window.$loading.hide();
    }, 5000);
  }, [])
  return (
    <View>
      <Text>{host}</Text>
    </View>
  );
};

export default TestEnv;
