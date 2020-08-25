import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function header() {
 return (
  <View>
   <Text style={styles.title}> Random peoples</Text>
   <View style={styles.line} />
  </View>
 );
}


const styles = StyleSheet.create({

 title: {
  color: "#2675ec",
  fontSize: 30,
  fontWeight: "bold",
  padding: 30,
  textAlign: "center",

 },
 line: {
  backgroundColor: "#CCC",
  height: 2,
 },
});
