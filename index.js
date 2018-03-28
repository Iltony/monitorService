import { AppRegistry } from 'react-native';
import App from './App';
import SomeTask from '../monitorService/SomeTaskName';

AppRegistry.registerComponent('monitorService', () => App);
AppRegistry.registerHeadlessTask('SomeTaskName', () => SomeTask);
//AppRegistry.registerHeadlessTask('OtherTaskName', () => console.log('other task log'));
