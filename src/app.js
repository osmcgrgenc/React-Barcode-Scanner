import React, {Component} from 'react';
// import {createStore, combineReducers} from 'redux';
// import {Provider} from 'react-redux';
import {StyleSheet, StatusBar, UIManager, View} from 'react-native';


// import * as reducers from '../reducers';
// import Login from './views/login.js';
import Routes from './routes/Routes.js';
// const reducer = combineReducers(reducers);
// const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="transparent"
          animated={true}
          translucent={true}
          barStyle="light-content"
        />
        <Routes />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
