/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Judul from './Component/Judul';
import Lucu from './april/lucu';   

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Judul title="BIODATA"/>
        <Judul title="LOGIN"/>
        <Lucu/>
        <Text>Welcome to React Native!!!!!!!!!!!</Text>
        <Text>Nama : Apriliya Ardiyanto</Text>
        <Text>Kelas : XI RPL 3</Text>
        <Text>No Absen : 07</Text>
        <Image style={styles.Image} source={require('./img/april.jpg')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  Image: {
    width : 250,
    height : 250,
  },
});
