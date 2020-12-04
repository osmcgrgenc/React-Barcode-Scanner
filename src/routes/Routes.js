import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Barcode from '../views/BarcodeScanner/barcodeScanner';
import Cart from '../views/Cart/cart.js';
import Login from '../views/login';
import Home from '../views/mainpage';

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="login" component={Login} title="Barkod Okuyucu" initial={true} />
      <Scene key="home" component={Home} title="Anasayfa" />
    </Scene>
  </Router>
);
export default Routes;
