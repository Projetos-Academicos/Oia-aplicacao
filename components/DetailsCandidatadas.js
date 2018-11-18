import React from "react";
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const DetailsCandidatadas = props => {
  return (
    <ScrollView>
     <View style={styles.container}>
        <View style={styles.dadosTopo}>
          <View style={[styles.row, styles.separete]}>
            <Text style={[styles.dados, styles.text, styles.title]}>Jardineiro Profissional</Text>
            <Icon name="content-cut" size={24} color='#808080' />
          </View>

          <View style={styles.row}>
            <Icon name='map-marker' size={22} color='#E75A4D'/>
            <Text style={[styles.dados, styles.text]}>Recife, Pernambuco</Text>
          </View>

          <View style={styles.row}>
            <Icon name='calendar-range' size={22} color='black'/>
            <Text style={styles.text}>Prazo 3 dias</Text>
          </View>
        </View>

        <View style={styles.description}>
          <View style={[styles.row, styles.separete]}>
            <Text style={styles.descriptionTitle}>Descrição</Text>
            <View style={styles.prazo}>
              <Text style={styles.time}>3 dias</Text>
            </View>
          </View>
        </View>

        <View style={styles.textDescription}>
          <Text style={styles.descricao}>is simply dummy text of the printing and typesetting industry</Text>
        </View>

        <View style={styles.valor}>
          <View style={styles.divValor}>
            <Text style={styles.textValor}>R$ 45,00</Text>
          </View>
        </View>

     </View>
     </ScrollView>
  );
}

export default DetailsCandidatadas;

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: "#fff"
 },
 dadosTopo: {
   marginTop: 15,
   marginHorizontal: 5,
   paddingLeft: 5,
 },


 row: {
  flexDirection: "row",
  borderBottomWidth: 1,
  borderColor: "#DEDEDE",
  marginBottom: 5
 },

 separete: {
  justifyContent: "space-between"
 },
 dados: {
   paddingBottom: 5
 },


 title: {
  fontWeight: "bold",
  fontSize: 23,
  color: "#000",
 },
 text: {
   fontSize: 20,
   color: '#AFAFAF',
 },


 description: {
   marginTop: 15,
   marginHorizontal: 5,
   paddingLeft: 5,
 },
 descriptionTitle: {
   fontSize: 23,
   fontWeight: "bold",
 },
 prazo: {
  padding: 3,
  backgroundColor: "#6F2B8F"
 },
 time: {
  color: '#fff',
  fontSize: 20
 },


 textDescription: {
  marginTop: 10,
  marginHorizontal: 5,
  paddingLeft: 5,
  borderBottomWidth: 1,
  borderColor: "#DEDEDE",
 },
 descricao: {
  fontSize: 16,
  color: '#AFAFAF',
 },

 valor: {
   marginHorizontal: 5,
   paddingLeft: 5,
   marginBottom: 10,
   flexDirection: 'row',
   justifyContent: 'flex-end'
 },

 divValor: {
  backgroundColor: "#22B34E",
  padding: 5,
 },

 textValor: {
   fontSize: 22,
   fontWeight: "bold",
   color: "white"
 },

 footer: { 
   flex: 1,
   backgroundColor: "#fff"
 },

 button: {
  margin: 5,
  alignItems: 'center',
  elevation: 3,
  backgroundColor: '#22B34E',
  padding: 15,
},
});
