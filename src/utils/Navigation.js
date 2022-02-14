/**
 * Date: 2022/2/11 下午4:08
 * Author: caro
 * Description:
 * */

import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function goBack() {
  console.log('5678', navigationRef)
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}

