/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import barcodeScan from './src/barcodeScanner';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => barcodeScan);
