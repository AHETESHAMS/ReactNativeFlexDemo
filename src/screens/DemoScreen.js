import React, { useEffect, useState } from 'react';
import {ActivityIndicator, FlatList, Text, View,StyleSheet } from 'react-native';

const DemoScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
      console.log("Inside fun");
    fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  } , []);
  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size='large' color="#999999" />
         </View> : 
      ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'flex-start'}}>
          <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.title}</Text>
          <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>{data.description}</Text>
        </View>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
          flex: 1,
          justifyContent: "center"
        }
})
 export default DemoScreen;