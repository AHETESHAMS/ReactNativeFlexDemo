import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';
const SearchBar = () => {
    return(
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput 
            placeholder="Search" 
            style={styles.inputStyle}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop:'60%',
        backgroundColor:'#dcdcdc',
        height:50,
        borderRadius:30,
        marginHorizontal:15,
        flexDirection:'row',
        marginBottom:10
    },
    inputStyle: {
        flex:1,
        fontSize:18
    },
    iconStyle: {
        fontSize:30,
        alignSelf:'center',
        marginHorizontal:15,
    }
});

export default SearchBar;