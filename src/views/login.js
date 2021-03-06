import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';
export default class Login extends React.Component {
  state = {
    email: 'metehan',
    password: 'pass',
  };
  goLogin() {
    // ajax il kontrol
    var name = this.state.email;
    var pass = this.state.password;
    var present = this;
    if (name == '' || pass == '') {
      Alert.alert('Boş bırakamazsınız');
    } else {
      if (name == 'metehan' && pass == 'password') {
        //Route Mainpage
        Actions.home();
      }
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}> Fembak Store </Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) =>
              this.setState({
                email: text,
              })
            }
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Şifre..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) =>
              this.setState({
                password: text,
              })
            }
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}> Şifremi unuttum ? </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={this.goLogin.bind(this)}>
          <Text style={styles.loginText}> Giriş </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgot: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
});
