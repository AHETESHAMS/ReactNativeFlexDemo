import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const SecondScreen = ({navigation})=>  {
    return (
        <View style={{flex: 1, flexDirection: 'column',justifyContent: 'space-between',alignItems: 'flex-start',marginTop:10}}>
            <View style={{ flexDirection: 'row',justifyContent: 'space-between',width:'100%',height:100}}>
                <View style={styles.firstBox}></View>
                <View style={styles.secondBox}></View>
            </View>

            <View style={{width:'100%',height:100,flexDirection: 'row', justifyContent:'center'}}>
                <View style={styles.fifthBox}></View>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',height:100,marginBottom:10}}>
                <View style={styles.thirdBox}></View>
                <View style={styles.fourthBox}></View>
            </View>

            <View style={styles.buttonStyle}>
                 <Button title="Next" onPress={()=> navigation.navigate('ThirdScreen')} />
             </View>
        </View>
    );
}

const styles = StyleSheet.create({
    firstBox: {
        width:100,
        height:100,
        backgroundColor:'dodgerblue',
        marginLeft:10,
    },
    secondBox: {
        width:100,
        height:100,
        backgroundColor:'red',
        marginRight:10
    },
    thirdBox: {
        width:100,
        height:100,
        backgroundColor:'orange',
        marginLeft:10
    },
    fourthBox: {
        width:100,
        height:100,
        backgroundColor:'yellow',
        marginRight:10
    },
    fifthBox: {
        width:100,
        height:100,
        backgroundColor:'pink', 
    },
    buttonStyle:{
        marginTop:10,
        flexDirection:'row',
        marginLeft:'80%',
        marginBottom:10
      },
});

export default SecondScreen;