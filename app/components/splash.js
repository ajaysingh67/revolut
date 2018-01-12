import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,Image,AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux'; 

export default class Splash extends Component<{}> {
	
	
  render() {
    return (
      <View style={styles.container}>
           <Text>demo asasdsasd</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1},
});
