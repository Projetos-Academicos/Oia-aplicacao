import React from "react";
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from "axios";

const ContainerDetails = props => {
  const { vaga } = props;

  function candidatarVaga() {

    ;
    // axios({
    //   method: 'post',
    //   url: 'https://oia-api.herokuapp.com/admin/candidatar-se/' + 2 + '/' + vaga.id
    // })
    //   .then(function (response) {
    //     console.log('funcionou');
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.dadosTopo}>
          <View style={[styles.row, styles.separete]}>
            <Text style={[styles.dados, styles.text, styles.title]}>{vaga.titulo}</Text>
          </View>

          <View style={styles.row}>
            <Icon name='map-marker' size={22} color='#E75A4D' />
            <Text style={[styles.dados, styles.text]}>{vaga.cidade.nome}</Text>
          </View>

          <View style={styles.row}>
            <Icon name='calendar-range' size={22} color='black' />
            <Text>
              <Text style={styles.text}>{vaga.prazo}</Text>
              <Text style={styles.text}>{vaga.prazo > 1 ? ' dias' : ' dia'}</Text>
            </Text>
          </View>
        </View>

        <View style={styles.description}>
          <View style={[styles.row, styles.separete]}>
            <Text style={styles.descriptionTitle}>Descrição</Text>
          </View>
        </View>

        <View style={styles.textDescription}>
          <Text style={styles.descricao}>{vaga.descricao}</Text>
        </View>

        <View style={styles.valor}>
          <View style={styles.divValor}>
            <Text style={styles.textValor}>{vaga.orcamento}</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.button} onPress={() => { Alert.alert("Em breve!") }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}> QUERO ESSA OIA </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default ContainerDetails;

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
