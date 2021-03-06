import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Svg, { Path } from 'react-native-svg';
const Wave=({customStyles,
    customHeight,
    customTop,
    customBgColor,
    height,
    customWavePattern })=> {
    return(
        <View style={customStyles}>
        <View style={{ backgroundColor: customBgColor, height: customHeight }}>
          <Svg
            height= {height}
            width="100%"
            viewBox="0 0 1440 320"
            style={{ position: 'absolute', top: customTop }}
          >
            <Path fill={customBgColor} d={customWavePattern} />
          </Svg>
        </View>
      </View>
    );
}

const styles=StyleSheet.create({});

export default Wave;