import React,{ useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";

const HomeScreen = ({navigation}) => {
  return( 
    <View>

      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
        <View style={styles.firstBox}></View>
        <View style={styles.secondBox}></View>
      </View>

      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10, marginTop:'80%'}}>
        <View style={styles.thirdBox}></View>
        <View style={styles.fourthBox}></View>
      </View>
      <View style={styles.buttonStyle}>
      <Button title="Next" onPress={()=> navigation.navigate('SecondScreen')} />
      </View>
      </View>
    );
};

const styles = StyleSheet.create({
  firstBox: {
    width:100,
    height:100,
    backgroundColor:'dodgerblue',
    marginLeft:10,
    borderRadius:20
    
  },
  secondBox: {
    width:100,
    height:100,
    backgroundColor:'orange',
    marginRight:10,
    borderRadius:20
  },
  thirdBox: {
    width:100,
    height:100,
    backgroundColor:'yellow',
    marginLeft:10,
    borderRadius:20
  },
  fourthBox: {
    width:100,
    height:100,
    backgroundColor:'red',
    marginRight:10,
    borderRadius:20
  },
  buttonStyle:{
    marginTop:10,
    flexDirection:'row',
    marginLeft:'80%'
  }
});

export default HomeScreen;
