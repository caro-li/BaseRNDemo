/**
 * @format
 */
// todo: code-push版本发布问题
// todo：环境变量的使用问题
// todo：编写使用案例文档
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
