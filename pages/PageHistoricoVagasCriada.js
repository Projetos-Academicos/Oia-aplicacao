import React from "react";
import { View, StyleSheet} from 'react-native';
import DetailsHistoricoVagasCriada from "../components/DetailsHistoricoVagasCriada";

export default class PageHistoricoVagasCriada extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <DetailsHistoricoVagasCriada />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
     // alignItems: 'center',
      backgroundColor: '#fff',
  }
});