import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const DemoScreen=()=> {
    return(
       <View style={{flex:1,justifyContent:'flex-end'}}>
           <View style={{width:'100%',height:100,marginBottom:30,flexDirection:'row',justifyContent:'space-around'}}>
               <View style={{width:100,height:100,backgroundColor:'orange',borderRadius:20}}></View>
               <View style={{width:100,height:100,backgroundColor:'orange',borderRadius:20}}></View>
               <View style={{width:100,height:100,backgroundColor:'orange',borderRadius:20}}></View>
           </View>
           <View style={{width:'100%',height:100,marginBottom:30,flexDirection:'row',justifyContent:'space-around'}}>
             <View style={{width:100,height:100,backgroundColor:'orange',borderRadius:20}}></View>
             <View style={{width:100,height:100,backgroundColor:'orange',borderRadius:20}}></View>
           </View>
       </View>
    );
   
}

const styles = StyleSheet.create({

});

export default DemoScreen;