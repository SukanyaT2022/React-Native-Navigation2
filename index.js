/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

import Config from 'react-native-config';

console.log(Config.API_URL); // https://api.example.com
export const apiKey = Config.COUNTRY_APIKEY;
console.log('api key', apiKey, Config);

AppRegistry.registerComponent(appName, () => App);


