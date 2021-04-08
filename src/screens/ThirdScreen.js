import React from 'react';
import {View,Text,StyleSheet,Button, Dimensions, TouchableOpacity, Image} from 'react-native';
import SearchBar from '../components/SearchBar';
import Wave from './Wave';
const ThirdScreen= ()=>{
    return(
        <View style={{flex:1,flexDirection:'column',justifyContent:'flex-start'}}>
            <Wave
                customStyles={styles.svgCurve}
                customHeight={130}
                customTop={90}
                height='110%'
                customBgColor="#717fec"
                customWavePattern="M0,224L60,234.7C120,245,240,267,360,266.7C480,267,600,245,720,208C840,171,960,117,1080,117.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            />
            <SearchBar/>
        <View style={{flex:1,flexDirection:'column', justifyContent:'flex-end'}}>
            <Text style={styles.text}>What Do You Need?</Text>
            <View style={{flexDirection:'row',justifyContent:'space-around',width:'100%',height:100,marginBottom:30}}>
                <TouchableOpacity>
                <View style={[styles.firstBox,styles.shadow]}>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={[styles.secondBox,styles.shadow]}></View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={[styles.fifthBox,styles.shadow]}></View>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-around',width:'100%',height:100,marginBottom:30}}>
            <TouchableOpacity>
                <View style={[styles.thirdBox,styles.shadow]}></View>
            </TouchableOpacity>    
            <TouchableOpacity>
                <View style={[styles.fourthBox,styles.shadow]}></View>
            </TouchableOpacity>   
            </View>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    firstBox: {
        width:100,
        height:100,
        backgroundColor:'white',
        borderRadius:20
    },
    secondBox: {
        width:100,
        height:100,
        backgroundColor:'white',
        borderRadius:20
    },
    thirdBox: {
        width:100,
        height:100,
        backgroundColor:'white',
        borderRadius:20
    },
    fourthBox: {
        width:100,
        height:100,
        backgroundColor:'white',
        borderRadius:20
    },
    fifthBox: {
        width:100,
        height:100,
        backgroundColor:'white',
        borderRadius:20
    },
    shadow: {
    shadowColor: "#000",
    shadowOffset: {width: 0,height: 4,},
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    },
    svgCurve: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    text: {
        marginLeft:20,
        marginBottom:20,
        fontSize:20,
        fontWeight:"bold"
    }
});

export default ThirdScreen;