import React from "react";
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'


const ContainerDetails = props => {
    return (
      <View style={styles.container}>
        <View style={styles.square}>
          <Text style={[styles.cell, styles.title]}>Jardineiro Profissional  <Icon name='md-people' size={24} color='#ddd'/></Text>
          <Text style={styles.cell}> 
            <Text style={styles.label}>Local: </Text>
            <Text>Recife - PE </Text>
          </Text> 
          <Text style={styles.cell}> 
          Eu preciso preciso opreciso precio sdasiodas doaiso
          dasdasid oasiodiaso dao sddasiodasid osia sodsiosda sdd
          dasdasidoa siodiasodaos dasiodasidos iasodsio sdasdd
          Eu preciso preciso opreciso precio sdasiodas doaiso
          dasdasid oasiodiaso dao sddasiodasid osia sodsiosda sdd
          dasdasidoa siodiasodaos dasiodasidos iasodsio sdasdd
          iasodsio sdasdd
          </Text>
          <Text style={styles.cell}> 
            <Text style={styles.money}>$345,00                      </Text>
            <Text>24/11/2018</Text>
          </Text> 
        </View>
          <TouchableOpacity style={styles.button} onPress={() => { }}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}> QUERO ESSA OIA </Text>
          </TouchableOpacity>
      </View>
         
      
    );
}

export default ContainerDetails;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 14,
      alignItems: "center",
      backgroundColor: "#5C5C5C",
    },
    square: {
      borderRadius: 5,
      paddingTop: 5,
      backgroundColor: "#484848",
      elevation: 5,
      marginBottom: 15
    },
    cell: {
      paddingLeft: 12,
      paddingRight: 12,
      fontSize: 16,
      paddingBottom: 15,
      color: '#FFF'
    },
    title: {
      fontWeight: 'bold',
      fontSize: 24,
    },
    label: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    money: {
      fontSize: 24,
      color: '#17a306',
      //fontWeight: 'bold',
      marginLeft: 5
    },
    button: {
      alignItems: 'center',
      elevation: 5,
      backgroundColor: '#22B34E',
      padding: 15,
      width: 330
    },
  });
  