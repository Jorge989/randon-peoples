import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableHighlight } from 'react-native';
import Header from '../components/Header'
import axios from 'axios';
export default function Main() {

 const [peoples, setPeoples] = useState([])
 function loadPeoples() {
  axios.get("https://randomuser.me/api/?nat=br&results=10")
   .then((response) => {
    setPeoples(response.data.results);

   });
 }

 useEffect(() => {
  loadPeoples();

 }, [])

 function renderItem({ item }) {
  return (

   <TouchableHighlight onPress={() => { }} underlayColor="#CCC">

    <View style={styles.container}>
     <Image source={{ uri: item.picture.large }} style={styles.img} />
     <View style={styles.containerInfo}>
      <Text style={styles.name}>{item.name.first}</Text>
      <Text style={styles.email}>{item.email}</Text>
     </View>
    </View>

   </TouchableHighlight>

  );
 }
 return (
  <View>

   <Header />
   <FlatList data={peoples} keyExtractor={item => item.login.uuid}
    renderItem={renderItem} />

  </View>
 );
}

const styles = StyleSheet.create({
 img: {
  width: 82,
  height: 82,
  borderRadius: 35,

 },
 name: {
  fontWeight: "bold",
  fontSize: 20,
 },
 email: {
  color: '#2674ec',
  fontWeight: 'bold'
 },
 container: {
  flexDirection: "row",
  padding: 15,
 },
 containerInfo: {

  marginLeft: 20,
 }
})